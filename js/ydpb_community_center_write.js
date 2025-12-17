$(document).ready(function() {

    // 파일 추가 시 파일명 표시 이벤트 : 20251217 최상림 추가
    $('.file_group input[type="file"]').change(function() {
        const files = this.files;
        let output = '';
        if(files.length > 0) {
            output += files[0].name;
            if(files.length > 1) {
                output += ' 외 ' + (files.length - 1);
            }
            $(this).siblings('.clear_file').show();
        }
        else {
            output = '';
            $(this).siblings('.clear_file').hide();
        }
        $(this).next().text(output);
    });

    // 파일 삭제 버튼 클릭 파일 리셋 이벤트 : 20251217 최상림 추가
    $('.file_group .clear_file').click(function() {
        $(this).siblings('input[type="file"]').val('');
        $(this).siblings('span').text('');
        $(this).hide();
    });
});