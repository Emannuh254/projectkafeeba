fetch("products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let product of products) {
            out += `
                <tr>
                    <td> <img src='${product["crop-image"]}'> </td>
                    <td>${product["farmer-name"]}</td>
                    <td id="visits-${product.id}">${product["visits"]}</td>
                    <td>${product["acres"]}</td>
                    <td>${product["farm-location"]}</td>
                    <td>${product["crop-name"]}</td>
                    <td>${product["fertilizer"]}</td>
                    <td>${product["contact-details"]["phone"]}</td> <!-- Display contact phone -->
                    <td>${product["contact-details"]["email"]}</td> <!-- Display contact email -->
                    <td><button onclick="incrementVisits(${product.id})">Visit</button></td>
                </tr>
            `;
        }

        placeholder.innerHTML = out;
    });

function incrementVisits(productId) {
    let visitsCell = document.getElementById(`visits-${productId}`);
    let currentVisits = parseInt(visitsCell.textContent);
    visitsCell.textContent = currentVisits + 1;
}

function exit() {
    alert('Exiting the application');
	window.close();
}
