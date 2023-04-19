/*
    Development build version: 0.1
    Build date: 05/04/2023
    Author: Bsc Team Project Group 2023
    Description: Navigation Controller Component
*/

AFRAME.registerComponent('nav-controller', {
  init: function () {
    console.log("loaded");
    // Get the toggle and dropdown elements
    const toggle = document.getElementById("toggle");
    const dropdown = document.getElementById("dropdown");

    // Get all navigation buttons
    const navButtons = document.getElementsByClassName("nav-button");

    // Add click event listener to the toggle button
    toggle.addEventListener("click", function() {
      const isVisible = dropdown.getAttribute("visible");
      dropdown.setAttribute("visible", !isVisible);
      if (isVisible) {
          toggleRaycaster(false);
      } else {
          toggleRaycaster(true);
      }
    });

    // Add click event listeners to the navigation buttons
    for (const button of navButtons) {
        button.addEventListener("click", function() {
            // Update the 360 image and hotpoints
            updateDropdown(button.getAttribute("data-scene"));
        });
    }

    function toggleRaycaster(enabled) {
        const cursor = document.getElementById("cursor");
        if (enabled) {
          cursor.setAttribute("raycaster", "objects: .nav-button, .clickable");
        } else {
          cursor.setAttribute("raycaster", "objects: .clickable");
        }
    }

    function updateDropdown(room) {
        const sky = document.getElementById("img-360");

        // Set the new image source
        sky.setAttribute("src", "#" + room);

        console.log(room);

        // Hide the dropdown
        dropdown.setAttribute("visible", false);

        // Disable raycaster for nav-buttons
        toggleRaycaster(false);

        // Add more logic if needed:
        // ...
    }

  }
});
