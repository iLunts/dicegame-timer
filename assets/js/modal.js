$(".btn--play, .device-content").on("click", function () {
    openModal();
});

$(".modal__overlay, .modal__close").on("click", function () {
    closeModal();
});

function openModal() {
    $(".modal").addClass("open");
    player.playVideo();
}

function closeModal() {
    $(".modal").removeClass("open");
    player.stopVideo();
}

$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        closeModal();
    }
});