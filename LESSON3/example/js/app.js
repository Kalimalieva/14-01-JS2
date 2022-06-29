const tabs = document.querySelectorAll(".tabheader__item")
const tabParent = document.querySelector(".tabheader__items")
const tabContent = document.querySelectorAll(".tabcontent")

// console.log(tabs, "tabs")
// console.log(tabParent, "tabParent");
// console.log(tabContent, "tabContent");


const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active")
}
hideTabContent()
showTabContent()

tabParent.addEventListener("click", (event) => {
    const target = event.target;
    // console.log(target);

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                console.log(i);
                hideTabContent();
                showTabContent(i);
            }
        })
    }
});

// HW1 // auto slider

let slideIndex = 0;
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > tabs.length && n > tabContent.length) {
        slideIndex += 1;
    }
    if (n < 0) {
        slideIndex = tabs.length && slideIndex == tabContent.length;
    }
    for (let slide of tabs) {
        slide.classList.remove("tabheader__item_active");
    }
    tabs[n].classList.add("tabheader__item_active");

    for (let slide of tabContent) {
        slide.style.display = "none";
    }
    tabContent[slideIndex].style.display = "block";
}

let timer = setInterval(function () {
    {
        slideIndex++;
        if (slideIndex > 3) {
            slideIndex = 0;
        }
    }
    showSlides(slideIndex);
}, 2000);


// HW2 modal is scroll
const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close")
console.log(modalTrigger);


function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";

    clearInterval(modalTimeout);
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
}

modalTrigger.addEventListener("click", openModal);



modal.addEventListener("click", (event) => {
    if (
        event.target === modal ||
        event.target.classList.contains("modal__close")
    ) {
        closeModal();
    }
})


function openModalScroll() {
    const page = document.documentElement;

    if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
        openModal();

        window.removeEventListener("scroll", openModalScroll);
    }
}

window.addEventListener("scroll", openModalScroll);
const modalTimeout = setTimeout(openModal, 5000);


// form // fetch
const forms = document.querySelectorAll('form')
const message = {
    loading: "Loading...",
    success: 'Спасибо, скоро свяжемся !',
    fail: 'Что-то пошло не так'
}

forms.forEach(item => {
    bindPostData(item)
});

const postData = async (url, data) => {
    const res = await fetch (url,  {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: data,
    });
    return await res;
}

function bindPostData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const messageBlock = document.createElement('div')
        messageBlock.src = message.loading
        messageBlock.style.cssText = `
    display: block;
    margin: 20px auto 0;
    `;
        form.insertAdjacentElement("afterend", messageBlock);

        const formData = new FormData(form);
        const object = {};

        formData.forEach((item, i) => {
            object[i] = item;
        });

        postData("server-php", JSON.stringify(object))
            .then((data) => {
                console.log(data);
                showThanksModal(message.success);
            })
            .catch(() => {
                showThanksModal(message.fail);
            })
            .finally(() => {
                form.reset();
                messageBlock.remove();
            });
    })
}
function showThanksModal(message) {
    openModal();
    const prevModal = document.querySelector(".modal__dialog");
    prevModal.classList.add("hide");

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");

    thanksModal.innerHTML = `
		<div class="modal__content">
			<div class="modal__close">x</div>
			<div class="modal__title">${message}</div>
		</div>
	`;
    modal.append(thanksModal);

    setTimeout(() => {
        prevModal.classList.remove("hide");
        closeModal();
        thanksModal.remove();
    }, 2000);
} 





