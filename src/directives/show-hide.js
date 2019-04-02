export default {
    bind(el, binding, vnode) {
        console.log(el);

        el.style.display = binding.value ? 'block' : 'none';
    },
    inserted(el, binding, vnode) {

    },
    update(el, binding, vnode, oldVnode) {
        el.style.display = binding.value ? 'block' : 'none';
    },
    componentUpdated(el, binding, vnode, oldVnode) {

    },
    unbind(el, binding, vnode) {

    }
};
