<template>
    <v-sheet>
        <v-navigation-drawer
            v-model="showDrawer"
            temporary
            absolute
        >
            <v-list nav>
                <v-list-item to="/profile">
                    <!-- TODO: Put in real logged in infos -->
                    <v-list-item-avatar>
                        <v-img :src="gravatar" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{ user.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider />
                <v-list-item
                    v-for="(settings, index) in drawerSettings"
                    :key="index"
                    :to="settings.path"
                >
                    <v-list-item-icon>
                        <v-icon>{{ settings.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ settings.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <v-list-item-title class="caption text-right text--secondary">
                        v{{ version }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar elevate-on-scroll>
            <v-app-bar-nav-icon @click="toggleDrawer" />
            <v-btn
                icon
                class="animated-btn"
                :class="{ hidden: hideBackButton }"
                to="/"
            >
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title class="title">
                Leitner
            </v-toolbar-title>
        </v-app-bar>
    </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { version } from '../../package.json';

interface UserI {
    name: string;
    handle: string;
}
const defaultUser = {
    name: '',
    handle: '',
};

@Component({
    computed: {
        gravatar (): string {
            return `https://www.gravatar.com/avatar/${this.user.handle}?s=40`;
        },
    },
    watch: {
        $route (to): void {
            this.hideBackButton = to.path === '/';
        },
    },
})
/**
 * @class
 * @extends Vue
 */
export default class AppBar extends Vue {
    showDrawer = false;
    hideBackButton = true;
    version = version;
    user: UserI = defaultUser;
    drawerSettings = [
        {
            icon: 'mdi-cogs',
            name: 'Settings',
            path: '/settings',
        },
        {
            icon: 'mdi-information',
            name: 'About',
            path: '/about',
        },
    ];

    /**
     * Hide or show the navigation drawer
     */
    toggleDrawer (): void {
        this.showDrawer = !this.showDrawer;
    }

    /**
     * Fetch data on component mounted
     */
    async mounted (): Promise<void> {
        this.hideBackButton = this.$router.currentRoute.path === '/';
        try {
            const response = await fetch('/api/user');
            if (response.ok) {
                this.user = await response.json();
            }
        }
        catch {
            // TODO: handle fail state
        }
    }
}
</script>

<style lang="scss" scoped>
    .animated-btn {
        transition: width ease-out .2s;
        overflow: hidden;
    }

    .hidden {
        width: 0 !important;
        transition-delay: .25s;
    }

    .title {
        margin-left: .5em;
    }
</style>
