(function () {

    function DisplayButton() {


        //Least amount of memory heap

        // let randomButton = document.getElementById("RandomButton")
        // randomButton.addEventListener("click", function() {
        //     location.href='/projects.html'
        // })

        //Most amount of memory heap
        // $("#RandomButton").on("click", function(){
        //     Location.href='contact.html'
        // })

        //Second most amount of memory heap - JS QuerySelectorAll
        document.querySelectorAll("#RandomButton").forEach(element => {
            element.addEventListener("click", () => {
                Location.href='contact.html'})
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
        
        let nguyen = new Contact("Nguyen Duc","2898302900","nguyen.duc@dcmail.ca")
        console.log(nguyen.toString())
        
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