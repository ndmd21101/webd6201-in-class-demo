(function () {

    function DisplayButton() {
        let randomButton = document.getElementById("RandomButton")
        randomButton.addEventListener("click", function() {
            location.href='/projects.html'
        })

        let mainContent = document.getElementsByTagName("main")[0]
        mainContent.setAttribute("class", "container")
        
        documentBody = document.body

        let mainParagraph = document.createElement("p")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3 container")


        let firstString = "This is a "
        let secondString = `${ firstString } main paragraph that we added through javascript and this is also on GitHub Pages`
        mainParagraph.textContent = secondString

        mainContent.appendChild(mainParagraph) 
        
    }
    
    function Start() {
        console.log("App Started!")

        switch (document.title) {
            case "Home - WEBD6201 Demo":
                DisplayButton()
                break
        }
    }

    window.addEventListener("load", Start)
})()