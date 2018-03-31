$(".btn--play, .device-content").on("click", function () {
    openModal();
});

$(".modal__overlay, .modal__close").on("click", function () {
    closeModal();
});

function openModal() {
    $(".modal").addClass("open");
    $('#video-promo').get(0).play();
}

function closeModal() {
    $(".modal").removeClass("open");
    $('#video-promo').get(0).pause();
}

$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        closeModal();
    }
});