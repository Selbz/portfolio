const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

  
  
  
  // Js grid scroll up     //  



document.addEventListener('DOMContentLoaded', function () {
    const gridItems = document.querySelectorAll('.grid-container .item');
    const maxTranslateY = 50; // Adjust the maximum translateY value as needed
    const spacing = 5; // Adjust the spacing between items

    // Initialize the initial translateY values
    gridItems.forEach(function (item, index) {
        item.style.transform = `translateY(${maxTranslateY + index * spacing}px)`;
    });

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;

        gridItems.forEach(function (item, index) {
            const speed = 0.2 * (index + 1); // Adjust the speed as needed
            const translateY = maxTranslateY - Math.min(scrollY * speed, maxTranslateY);
            item.style.transform = `translateY(${translateY + index * spacing}px)`;
        });
    });
});

    // Js grid transparent effect     // 

document.addEventListener('DOMContentLoaded', function () {
    const gridItems = document.querySelectorAll('.grid-container .item');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the scroll event
    function handleScroll() {
        gridItems.forEach(function (item) {
            if (isInViewport(item) && item.classList.contains('item-hidden')) {
                item.classList.remove('item-hidden');
                item.classList.add('item-visible');
            }
        });
    }

    // Initial check when the page loads
    handleScroll();

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
});


// Function to open a modal
function openModal(modalId) {
    var modal = document.getElementById('modal-' + modalId);
    modal.style.display = 'block';
}

// Function to close a modal
function closeModal(modalId) {
    var modal = document.getElementById('modal-' + modalId);
    modal.style.display = 'none';
}

if (event.target == modal) {
    modal.style.display = "none";
  }

  