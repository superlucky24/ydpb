$(document).ready(function(){

    $('.side_list_menu>div').on('click', function(){        
        $(this).parent('.side_list_menu').siblings().removeClass('open');
        $(this).parent().siblings().find('.sub_list').removeClass('show');
        $(this).parent().siblings().find('.sub_group').removeClass('show');
        $(this).next('.sub_list').toggleClass('show');
        $(this).next().find('.sub_group').toggleClass('show');
        $(this).parent().toggleClass('open');
    });

    $('.sub_group_title').on('click', function(){
        $('.sub_group_title').not(this).removeClass('open');
        $('.sub_group_list').not($(this).next('.sub_group_list')).removeClass('show');
        $(this).toggleClass('open');
        $(this).next('.sub_group_list').toggleClass('show');
    });

    $('.main3_dong').on('click', function() {
        $(this).toggleClass('checked');
        $('.main3_contents').removeClass('show');
        $('.m3dong').addClass('show');
    });
    $('.main3_gu').on('click', function() {
        $(this).toggleClass('checked');
        $('.main3_contents').removeClass('show');
        $('.m3gu').addClass('show');
    });

    $('.loc_sns').on('click', function() {
        $(this).toggleClass('checked');
        $('.sns_list').toggleClass('show');
    });

});