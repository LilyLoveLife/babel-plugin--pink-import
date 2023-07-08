# babel-plugin--pink-import
Transform import to certain component

Transform

```
    import {Button} from 'pink-flower-ui'
```

To 

```
    import Button from 'pink-flower-ui/dist/lib/index.cjs'
    import 'pink-flower-ui/dist/lib/index.css'
```


Config:

```
    {
        plugins: [
            ['pink-import', {
                'pink-flower-ui': {
                        jsDir: '/dist/lib',
                        jsName: 'index.cjs',
                        jsDir: '/dist/lib',
                        cssName: 'index.css'
                    }
                }
            ]
        ]
    }
```



