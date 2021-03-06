export const BAR_PROP_MAP = {

    // 垂直
    vertical: {

        // translate的位移方向
        axis: 'Y',

        // 触发事件中，该计算鼠标位置的取值的单位
        client: 'clientY',

        // 条的尺寸单位
        rectSize: 'height',
        scrollOffset: 'scrollTop',
        viewSize: 'viewHeight',
        class: 'is-vertical',

        // 条的厚度单位
        thicknessUnit: 'width',

        // 条的顶部使用的单位
        start: 'top'
    },

    // 水平
    horizontal: {
        axis: 'X',
        client: 'clientX',
        rectSize: 'width',
        scrollOffset: 'scrollLeft',
        viewSize: 'viewWidth',
        class: 'is-horizontal',
        thicknessUnit: 'height',

        start: 'left'
    }
}
