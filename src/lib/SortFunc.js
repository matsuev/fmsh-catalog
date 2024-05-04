const SortFunc = [
   {
      label: 'F1',
      func: (a,b) => (a.cost >= b.cost) ? -1 : 0,
   },
   {
      label: 'F2',
      func: (a,b) => (a.cost < b.cost) ? -1 : 0,
   },
   {
      label: 'F3',
      func: (a,b) => (a.ram.value >= b.ram.value) ? -1 : 0,
   },
   {
      label: 'F4',
      func: (a,b) => (a.ram.value < b.ram.value) ? -1 : 0,
   },
]

export {SortFunc}