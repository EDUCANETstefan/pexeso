window.onload = () => {
    import("./pexeso-gui.js") 
        .then((module) => {
            const PexesoGUI = module.PexesoGUI;
            const component = document.getElementById("pexeso");

            const game = new PexesoGUI(component);
            game.draw();
        });
};
