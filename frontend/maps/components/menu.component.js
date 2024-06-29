window.Event = new Vue();

// 
const OtbMenuComponent = Vue.component("otb-menu-component", {
    props: {
        parent: Object,
        layout: String,
    },
    template: `
      <div>
      <div>

        <a :href="hrefTo_Menu" class="menu-item-preview">
          <div style="font-size: x-small" class="text-secondary">Menu</div>
          <img width="40" height="40" :src="'../../img/icons/menu.png'" :class="url.indexOf('/menu') >= 0 ? 'menu-item-preview-selected':''" style="border: 1px solid gray; border-radius: 5px; padding: 5px; margin-right: 10px">
        </a>

        <a :href="hrefTo_Symbols" class=" menu-item-preview ">
          <div style="font-size: x-small" class="text-secondary">Symbols</div>
          <img width="40" height="40" :src="'../../img/icons/social.png'" :class="url.indexOf('/symbols') >= 0 ? 'menu-item-preview-selected':''" style="border: 1px solid gray; border-radius: 5px; padding: 5px; margin-right: 10px">
        </a>

        <a :href="hrefTo_Balances" class="menu-item-preview">
          <div style="font-size: x-small" class="text-secondary">Balance</div>
          <img width="40" height="40" :src="'../../img/icons/balance.png'" :class="url.indexOf('/balance') >= 0 ? 'menu-item-preview-selected':''" style="border: 1px solid gray; border-radius: 5px; padding: 5px; margin-right: 10px">
        </a>

        <a :href="hrefTo_Orders" class="menu-item-preview">
          <div style="font-size: x-small" class="text-secondary">Orders</div>
          <img width="40" height="40" :src="'../../img/icons/cart.png'" :class="url.indexOf('/orders') >= 0 ? 'menu-item-preview-selected':''" style="border: 1px solid gray; border-radius: 5px; padding: 5px; margin-right: 10px">
        </a>

        <a :href="hrefTo_Help" class="menu-item-preview">
          <div style="font-size: x-small" class="text-secondary">Help</div>
          <img width="40" height="40" :src="'../../img/icons/help.png'" :class="url.indexOf('/help') >= 0 ? 'menu-item-preview-selected':''" style="border: 1px solid gray; border-radius: 5px; padding: 5px; margin-right: 10px">
        </a>
        
      </div>
      <div v-if="showFullMenu">

      <a :href="hrefTo_Shifts" class="menu-item-preview">
        <div style="font-size: x-small" class="text-secondary">Alets</div>
        <img width="40" height="40" :src="'../../img/icons/bell.png'" :class="url.indexOf('/shifts') >= 0 ? 'menu-item-preview-selected':''" style="border: 1px solid gray; border-radius: 5px; padding: 5px; margin-right: 10px">
      </a>

        <a :href="hrefTo_Balances" class="menu-item-preview">
          <div style="font-size: x-small" class="text-secondary">Balance</div>
          <img width="40" height="40" :src="'../../img/icons/balance.png'" :class="url.indexOf('/balance') >= 0 ? 'menu-item-preview-selected':''" style="border: 1px solid gray; border-radius: 5px; padding: 5px; margin-right: 10px">
        </a>

        <a :href="hrefTo_Positions" class="menu-item-preview">
          <div style="font-size: x-small" class="text-secondary">Positions</div>
          <img width="40" height="40" :src="'../../img/icons/stack.png'" :class="url.indexOf('/positions') >= 0 ? 'menu-item-preview-selected':''" style="border: 1px solid gray; border-radius: 5px; padding: 5px; margin-right: 10px">
        </a>

        <a :href="hrefTo_Triggers" class="menu-item-preview">
          <div style="font-size: x-small" class="text-secondary">Triggers</div>
          <img width="40" height="40" :src="'../../img/icons/target.png'" :class="url.indexOf('/triggers') >= 0 ? 'menu-item-preview-selected':''" style="border: 1px solid gray; border-radius: 5px; padding: 5px; margin-right: 10px">
        </a>

        <!--a :href="hrefTo_Game" class="menu-item-preview">
          <div style="font-size: x-small" class="text-secondary">Game</div>
          <img width="40" height="40" :src="'../../img/icons/game.png'" :class="url.indexOf('/voting') >= 0 ? 'menu-item-preview-selected':''" style="border: 1px solid gray; border-radius: 5px; padding: 5px; margin-right: 10px">
        </a-->

        <a :href="hrefTo_Options" class="menu-item-preview">
          <div style="font-size: x-small" class="text-secondary">Options</div>
          <img width="40" height="40" :src="'../../img/icons/settings.png'" :class="url.indexOf('/options') >= 0 ? 'menu-item-preview-selected':''" style="border: 1px solid gray; border-radius: 5px; padding: 5px; margin-right: 10px">
        </a>

        <a :href="hrefTo_Help" class="menu-item-preview">
          <div style="font-size: x-small" class="text-secondary">Help</div>
          <img width="40" height="40" :src="'../../img/icons/help.png'" :class="url.indexOf('/help') >= 0 ? 'menu-item-preview-selected':''" style="border: 1px solid gray; border-radius: 5px; padding: 5px; margin-right: 10px">
        </a>

        <span class="menu-item-preview" v-on:click="showFullMenu = !showFullMenu">
          <div style="font-size: x-small" class="text-secondary">{{showFullMenu ? 'Less':'More'}}</div>
          <img width="40" height="40" :src="showFullMenu ? '../../img/icons/up.png':'../../img/icons/down.png'" style="border: 1px solid gray; border-radius: 5px; padding: 5px; margin-right: 10px">
        </span>
      </div>
      <div v-if="!layout">
        <hr>
      </div>
      </div>
    `,
	style: `
    `,
	model: {
		event: 'edit'
	},
	data() {
		return {
            showFullMenu: false,
            url: window.location.href,
            hrefTo_Menu: null,
            hrefTo_Balances: null,
            hrefTo_Positions: null,
            hrefTo_Orders: null,
            hrefTo_Symbols: null,
            hrefTo_Triggers: null,
            hrefTo_Options: null,
            hrefTo_Alerts: null,
            hrefTo_Help: null,
            hrefTo_Game: null,
            hrefTo_Profile: null,
        }
    },
    methods: {
        updateMenu_otb_fn(parent){
          this.hrefTo_Alerts = "../alerts?env=" + parent.env +
              "&userId=" + parent.user.userId + "&token=" + parent.user.token +
              "&symbolId=" + parent.symbolId +
              "&orderId=" + parent.orderId +
              "&balanceId=" + parent.orderId +
              "&jwt=" + parent.user.jwt;
            this.hrefTo_Shifts = "../shifts?env=" + parent.env +
                "&userId=" + parent.user.userId + "&token=" + parent.user.token +
                "&symbolId=" + parent.symbolId +
                "&orderId=" + parent.orderId +
                "&balanceId=" + parent.orderId +
                "&jwt=" + parent.user.jwt;
            this.hrefTo_Balances = "../balance?env=" + parent.env +
                "&userId=" + parent.user.userId + "&token=" + parent.user.token +
                "&symbolId=" + parent.symbolId +
                "&orderId=" + parent.orderId +
                "&balanceId=" + parent.orderId +
                "&jwt=" + parent.user.jwt;
            this.hrefTo_Game = "../voting?env=" + parent.env +
                "&userId=" + parent.user.userId + "&token=" + parent.user.token +
                "&symbolId=" + parent.symbolId +
                "&orderId=" + parent.orderId +
                "&balanceId=" + parent.orderId +
                "&jwt=" + parent.user.jwt;
            this.hrefTo_Help = "../help?env=" + parent.env +
                "&userId=" + parent.user.userId + "&token=" + parent.user.token +
                "&symbolId=" + parent.symbolId +
                "&orderId=" + parent.orderId +
                "&balanceId=" + parent.orderId +
                "&jwt=" + parent.user.jwt;
            this.hrefTo_Menu = "../menu?env=" + parent.env +
                "&userId=" + parent.user.userId + "&token=" + parent.user.token +
                "&symbolId=" + parent.symbolId +
                "&orderId=" + parent.orderId +
                "&balanceId=" + parent.orderId +
                "&jwt=" + parent.user.jwt;
            this.hrefTo_Options = "../options?env=" + parent.env +
                "&userId=" + parent.user.userId + "&token=" + parent.user.token +
                "&symbolId=" + parent.symbolId +
                "&orderId=" + parent.orderId +
                "&balanceId=" + parent.orderId +
                "&jwt=" + parent.user.jwt;
            this.hrefTo_Orders = "../orders?env=" + parent.env +
                "&userId=" + parent.user.userId + "&token=" + parent.user.token +
                "&symbolId=" + parent.symbolId +
                "&orderId=" + parent.orderId +
                "&balanceId=" + parent.orderId +
                "&jwt=" + parent.user.jwt;
            this.hrefTo_Positions = "../positions?env=" + parent.env +
                "&userId=" + parent.user.userId + "&token=" + parent.user.token +
                "&symbolId=" + parent.symbolId +
                "&orderId=" + parent.orderId +
                "&balanceId=" + parent.orderId +
                "&jwt=" + parent.user.jwt;
            this.hrefTo_Profile = "../profile?env=" + parent.env +
                "&userId=" + parent.user.userId + "&token=" + parent.user.token +
                "&symbolId=" + parent.symbolId +
                "&orderId=" + parent.orderId +
                "&balanceId=" + parent.orderId +
                "&jwt=" + parent.user.jwt;
            this.hrefTo_Symbols = "../symbols?env=" + parent.env + 
                "&userId=" + parent.user.userId + "&token=" + parent.user.token + 
                // "&symbolId=" + parent.symbolId +
                "&orderId=" + parent.orderId +
                "&balanceId=" + parent.orderId +
                "&jwt=" + parent.user.jwt;
            this.hrefTo_Triggers = "../triggers?env=" + parent.env +
                "&userId=" + parent.user.userId + "&token=" + parent.user.token +
                "&symbolId=" + parent.symbolId +
                "&orderId=" + parent.orderId +
                "&balanceId=" + parent.orderId +
                "&jwt=" + parent.user.jwt;
        }
    }
});

export default {
    components: {
        OtbMenuComponent
    }
}