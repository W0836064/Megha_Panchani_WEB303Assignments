/*
    Assignment 05
*/

class ContentItem {
    constructor(id, name, description, category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
    }

    updateContentItem(id, name, description, category) {
        if (this.id === id) {
            if (name !== null) {
                this.name = name;
            }
            if (description !== null) {
                this.description = description;
            }
            if (category !== null) {
                this.category = category;
            }
        }
    }

    toString() {
        return `
            <div id="content-item-${this.id}" class="content-item-wrapper">
                <h2>${this.name}</h2>
                <p>${this.description}</p>
                <div>${this.category}</div>
            </div>
        `;
    }
}

const contentItems = [
    new ContentItem(0, "Paris Trip", "Exploring the City of Love", "Travel"),
    new ContentItem(1, "Mountain Adventure", "Hiking in the Alps", "Travel"),
    new ContentItem(2, "Beach Vacation", "Relaxing by the Sea", "Travel"),
    new ContentItem(3, "Historical Sites", "Discovering Ancient Ruins", "Travel"),
    new ContentItem(4, "Road Trip", "Exploring New Horizons", "Travel"),
];

$(document).ready(function () {
    const $contentItemList = $("#content-item-list");

    contentItems.forEach((item) => {
        $contentItemList.append(item.toString());
    });

    $(".content-item-wrapper").css({
        border: "1px solid #000",
        width: "300px",
        padding: "10px",
        margin: "10px auto",
    });

    $contentItemList.append(
        `<button id="update-success">Update Successful</button>`
    );
    $contentItemList.append(
        `<button id="update-failure">Update Unsuccessful</button>`
    );

    $("#update-success").click(function () {
        const itemToUpdate = contentItems[0];
        itemToUpdate.updateContentItem(itemToUpdate.id, "London ", "Exploring New Places", "Adventure");
        console.log("Updated Successfully: " + itemToUpdate.toString());
    });

    $("#update-failure").click(function () {
        const itemToUpdate = contentItems[1];
        const originalItem = itemToUpdate.toString(); // Store the original item
    
        itemToUpdate.updateContentItem(itemToUpdate.id, "Different Game", null, "Different Category");
        
        console.log("Update Failed: No changes made to the item.");
    });
    
});


