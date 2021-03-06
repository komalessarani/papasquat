/**
 * main
 */
var game = {

    /**
     *
     * Initialize the application
     */
    onload: function() {

        // init the video
        if (!me.video.init(800, 600, {wrapper : "screen", scale : "auto"})) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // set all ressources to be loaded
        me.loader.preload(game.resources, this.loaded.bind(this));
    },


    /**
     * callback when everything is loaded
     */
    loaded: function ()    {

        // set the "Play/Ingame" Screen Object
        me.state.set(me.state.PLAY, new game.PlayScreen());

        // set the fade transition effect
        me.state.transition("fade","#FFFFFF", 250);

        // register our objects entity in the object pool
        me.pool.register("mainPlayer", game.PlayerEntity);
        me.pool.register("puddle", game.PuddleEntity);
        me.pool.register("mom", game.MomEntity);
        me.pool.register("plant", game.PlantEntity);

        // switch to PLAY state
        me.state.change(me.state.PLAY);
    }
};

game.collisionTypes = {
    PUDDLE : me.collision.types.USER << 0,
    PLANT : me.collision.types.USER << 1,
    FOOD : me.collision.types.USER << 2,
};
