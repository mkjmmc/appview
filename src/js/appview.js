/**
 * Created by mao_kejia on 2016/6/26.
 */

$(function () {
    if ('ontouchstart' in window) {
        $.isTouchable = true;
        $.EVENT_START = 'touchstart';
        $.EVENT_MOVE = 'touchmove';
        $.EVENT_END = 'touchend';
    } else {
        $.isTouchable = false;
        $.EVENT_START = 'mousedown';
        $.EVENT_MOVE = 'mousemove';
        $.EVENT_END = 'mouseup';
    }
    $.EVENT_CANCEL = 'touchcancel';
    $.EVENT_CLICK = 'click';

    $(document).on($.EVENT_START, '.view-table-cell', function () {
       $(this).addClass('active')
    });
    $(document).on($.EVENT_MOVE, '.view-table-cell', function () {
        $(this).removeClass('active')
    });
    $(document).on($.EVENT_END, '.view-table-cell', function () {
        $(this).removeClass('active')
    });
})
