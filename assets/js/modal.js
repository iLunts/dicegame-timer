$(".btn--play, .device-content").on("click", function () {
    openModal();
});

$(".modal__overlay, .modal__close").on("click", function () {
    closeModal();
});

function openModal() {
    $(".modal").addClass("open");
}

function closeModal() {
    $(".modal").removeClass("open");
}

$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        closeModal();
    }
});