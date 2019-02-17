const postcss = require('postcss');
const valueParser = require('postcss-value-parser');

module.exports = postcss.plugin('simple-scrim', () => {

    return function(css) {
      css.walkRules(rule => {
        rule.walkDecls(decl => {

          if (decl.value.includes('scrim')) {

            const parsedValue = valueParser(decl.value)
            parsedValue.walk(node => {

              if (node.value === 'scrim') {

                const scrimParams = valueParser
                .stringify(node.nodes)
                .split(',')
                .map(str => str.trim())
  
                scrimParams.forEach((param, i) => {

                    const colorStops = [];

                      node.type = 'word'
                      const ease = [1,.925,.854,.792,.737,.688,.643,.601,.56,.52,.481,.442,.401,.359,.314,.265,.21,.148,.077,0]; // ease

                      let splitUnits = scrimParams[1].split(/(\d+)/);
          
                    const alpha = (num, in_min, in_max, out_min, out_max) => {
                        return  Number(((num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min).toFixed(2));
                    }

                    const distance = (num) => {
                        const localDist = Number((splitUnits[1] - (splitUnits[1] * num)).toFixed(1));
                        if (num == 1 || num == 0) {
                            return '';
                        } else {
                            return `${localDist}${splitUnits[2]}`;
                        }
                    }
          
                      const lng = ease.length ;
                      for (let i=0; i<lng; i++) {
                          colorStops.push(` rgba(0, 0, 0, ${alpha(i, 0, (lng - 1), Number(scrimParams[2]), 0)}) ${distance(ease[i])}`);
                      }
          
                      node.value = `linear-gradient(${scrimParams[0]}, ${colorStops})`

                      decl.value = parsedValue.toString()

                  
                })
              }
            })
          }
        })
      })
    }
})