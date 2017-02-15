const Projects = new Vue ({

  el: '#projects',
  data: {
    dimmed1: false,
    dimmed2: false,
    dimmed3: false,
    dimmed4: false
  },
  methods: {
    dimmerOn: function(event) {
      let target = event.target
      while(!target.classList.contains('project')) {
        target = target.parentElement
      }
      switch (target.dataset.num) {
        case "1":
          this.dimmed1 = true
          break
        case "2":
          this.dimmed2 = true
          break
        case "3":
          this.dimmed3 = true
          break
        case "4":
          this.dimmed4 = true
          break
        default:
          null
      }
    },
    dimmerOff: function(event) {
      this.dimmed1 = false
      this.dimmed2 = false
      this.dimmed3 = false
      this.dimmed4 = false
    }
  }

})
