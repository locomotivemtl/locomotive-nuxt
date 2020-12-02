export default {
    props: ['option'],
    methods: {
        getOption() {
            if (typeof this.option === 'undefined') {
                return false
            } else if (typeof this.option == 'object') {
                return this.option.map(item => `-${item}`)
            } else {
                return `-${this.option}`;
            }
        }
    }
}
