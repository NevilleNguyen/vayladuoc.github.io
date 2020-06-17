$(document).ready(function() {

    'use strict';

    var navbar = $('header');

    // click show menu
    $('#navLine').click(function() {
        $(this).toggleClass('active');
        $('.hd-right').toggleClass('nav-active');
    });

    $(window).scroll(function() {
        var $height = $(window).scrollTop();

        if($height > 50) {
            navbar.addClass("scroll-down");
        } else {
            navbar.removeClass("scroll-down");
        }

        // Show btn DANG KY TU VAN
        if ($(".main-page-info").length > 0) {
            var mainpageHight = $('.main-page-info .btn-action').offset().top - 40;
            var windowHight = $(window).scrollTop();
            showBtnRegister(windowHight, mainpageHight);
        }
        if ($('.loan-detail').length > 0) {
            var mainpageHight = $('.loan-detail').offset().top - 40;
            var windowHight = $(window).scrollTop();
            showBtnRegister(windowHight, mainpageHight);
        }
    });

    // Click open faq
    $('.faq-item-title').click(function(){
        $(this).toggleClass('active');
        $(this).next('.faq-item-content').toggle();
    });

    $("#loan_month, #input-phone").on("keypress keyup blur",function (event) {
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });

    $("#loan-calculate").submit(function(e){
        e.preventDefault();
    });

    $('#btn-cal-loan').click(function(event) {
        var month = $("#loan_month").val(),
          amount = $("#loan_amount").autoNumeric('get'),
          isError = false;
        if(amount == 0 || amount === null) {
            alert('Bạn chưa nhập số tiền cần vay!');
            isError = true;
        }
        if(month == 0 || month === null) {
            alert('Bạn chưa nhập số tháng vay!');
            isError = true;
        }
        if(isError === false) {
        }
    });

    $('.result-title').click(function(){
        $(this).parent().html('<p>Chọn phương án khác để so sánh</p>');
    });

    $("#form-register").submit(function(e){
        e.preventDefault();
    });

    $('#btn-register-submit').click(function(event) {
        var name = $("#input-name").val(),
            phone = $("#input-phone").val(),
            email = $("#input-email").val(),
            provinces = $("#input-provinces").val(),
            loan_type = $("#input-loan-type").val(),
            isError = false;
        if(name == '' || name === null) {
            // alert('Bạn chưa nhập họ và tên!');
            $("#input-name").parent().addClass('error');
            // $('.error').append('<label class="check-input"><img src="assets/images/vay-mua-oto/ic-warning.png"></label>');
            isError = true;
        }
        if(phone == 0 || phone === null) {
            // alert('Bạn chưa nhập số điện thoại!');
            isError = true;
        }
        if(email == '' || email === null) {
            // alert('Bạn chưa nhập email!');
            isError = true;
        }
        if(provinces == '' || provinces === null) {
            // alert('Bạn chưa nhập tỉnh thành!');
            isError = true;
        }
        if(loan_type == '' || loan_type === null) {
            // alert('Bạn chưa nhập loại cần vay!');
            isError = true;
        }
        if(isError === true) {
            alert('Bạn cần nhập đầy đủ các trường!')
            return false;
        }
        if (!validateEmail(email)) {
            alert('Invalid Email Address');
            return false;
        }
        if(isError === false) {
            $('<p class="send-success">Cảm ơn bạn, thông tin đã được gửi đi!</p>').insertAfter(this);
        }
    });

    $("#send-question").submit(function(e){
        e.preventDefault();
    });

    $('.btn-send-question').click(function(event) {
        var question = $("#question-content").val(),
            isError = false;
        $('.send-success').remove();
        if(question == '' || question === null) {
            alert('Bạn chưa nhập nội dung câu hỏi!');
            isError = true;
        }
        if(isError === false) {
            $('<p class="send-success">Cảm ơn bạn, câu hỏi đã được gửi đi!</p>').insertAfter(this);
        }
    });

    $('.btn-more-result').click(function(){
        $('.result .result-detail').removeClass('dl-pc');
    });
});

$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e) {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

        e.preventDefault();
    });

    //----- CLOSE
    $('[data-popup-close]').on('click', function(e) {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

        e.preventDefault();
    });
});

// Function that validates email address through a regular expression.
function validateEmail(email) {
    var filter = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (filter.test(email)) {
        return true;
    }
    else {
        return false;
    }
}

function showBtnRegister(windowHight, mainpageHight){
    if (windowHight > mainpageHight) {
        $('.advisory-register').addClass('show-btn');
    } else {
        $('.advisory-register').removeClass('show-btn');
    }
}
