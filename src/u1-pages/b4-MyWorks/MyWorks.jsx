import React from 'react'
import {Work} from './Work/Work'
import {Title} from '../../u0-common/u0.2-components/Title/Title'

import one from '../../u0-common/u0.1-assets/images/projects/giris.jpeg'
import s from './MyWorks.module.scss'

export const MyWorks = () => {
    const oneWork = {
        backgroundImage: `url(${one})`,
    }

    return (
        <div className={s.worksBlock}>
            <div className={s.container} id='works'>
                <Title title={'My works'}
                       titleDescription={'Check out my latest web software development portfolio projects.'}
                       id='works'
                />
                <div className={s.works}>
                    <Work style={oneWork}
                          link={'https://marid01.github.io/react-sneakers-arch/#/'}
                          repLink={'https://github.com/marid01/react-sneakers-arch'}
                          projectName={'Sneakers store'}
                          description={
                              'Stack: SCSS, Javascript, React, ESLint'
                          }
                    />
                    <Work style={oneWork}
                          link={'https://marid01.github.io/todo-react-ts-it-incubator/'}
                          repLink={'https://github.com/Sergey-lang/Todo-list'}
                          projectName={'Task list'}
                          description={
                              'Stack: Javascript, TypeScript, React, Redux, Material UI, ESLint, Prettier'
                          }
                    />
                    <Work style={oneWork}
                          link={'https://react-pizza-marid.herokuapp.com/'}
                          repLink={'https://github.com/marid01/react_pizza'}
                          projectName={'Pizza - shop'}
                          description={
                              'Stack: Javascript, React, Redux, ESLint, Prettier'
                          }
                    />
                    <Work style={oneWork}
                          link={'https://marid01.github.io/react-movie/'}
                          repLink={'https://github.com/marid01/react-movie'}
                          projectName={'Movie Search'}
                          description={
                              'Stack: Javascript, React, ESLint, REST API'
                          }
                    />
                    <Work style={oneWork}
                          link={'https://marid01.github.io/react-shop/'}
                          repLink={'https://github.com/marid01/react-shop'}
                          projectName={'React Shop'}
                          description={
                              'Stack: Javascript, React, ESLint, REST API'
                          }
                    />
                    <Work style={oneWork}
                          link={'https://marid01.github.io/react-food/#/'}
                          repLink={'https://github.com/marid01/react-food'}
                          projectName={'React Food'}
                          description={
                              'Stack: Javascript, React, ESLint, REST API'
                          }
                    />
                </div>
            </div>
        </div>
    )
}
