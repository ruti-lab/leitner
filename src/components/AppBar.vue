<template>
    <v-sheet>
        <v-navigation-drawer
            v-model="showDrawer"
            temporary
            absolute
        >
            <v-list nav>
                <v-list-item>
                    <!-- TODO: Put in real logged in infos -->
                    <v-list-item-avatar>
                        <v-img src="https://www.gravatar.com/avatar/e2d3da5485b0ca3b6b0c7d78f428a804?s=40" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>John Doe</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider />
                <v-list-item
                    v-for="(settings, index) in drawerSettings"
                    :key="index"
                    link
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
        <v-app-bar app>
            <v-btn
                icon
                @click="toggle"
            >
                <v-icon>mdi-menu</v-icon>
            </v-btn>

            <v-toolbar-title>
                Leitner
            </v-toolbar-title>
        </v-app-bar>
    </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { version } from '../../package.json';

@Component
/**
 * @class
 * @extends Vue
 */
export default class AppBar extends Vue {
    showDrawer = false;
    version = version;
    drawerSettings = [
        {
            icon: 'mdi-account',
            name: 'Profile',
        },
        {
            icon: 'mdi-cogs',
            name: 'Settings',
        },
        {
            icon: 'mdi-information',
            name: 'About',
        },
    ];

    /**
     * Hide or show the navigation drawer
     */
    toggle (): void {
        this.showDrawer = !this.showDrawer;
    }
}
</script>
