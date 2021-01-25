import React, {useState, useRef, useEffect} from 'react';
import styles from './Library.module.css'
import AddButton from './../../assets/img/add.svg'
import EditButton from './../../assets/img/edit.svg'
// import DeleteButton from './../../assets/img/delete.svg'

export const Library = ({library, setLibrary}) => {

    useEffect(() => {
        input.current.focus()
    }, [])

    const input = useRef()

    const [newWord, setNewWord] = useState('')

    const enterWord = (event) => {
        setNewWord(event.currentTarget.value)
    }

    const deleteWord = (id) => {
        setLibrary(library.filter((word, index) => index!== id))
        setNewWord('')
    }

    const addWord = async (event) => {
        event.preventDefault()
        const translation = await fetch(`http://tmp.myitschool.org/API/translate/?source=ru&target=en&word=${newWord}`)
        const result = await translation.json()
        setLibrary([...library, {word: newWord,translate: result.translate}])
        input.current.value = ''
    }

    return (
       <section>
           <div className={styles.libraryBlock}>
               <span>Add new <b>Word</b></span>

               <form onSubmit={addWord} className={styles.addWordBlock}>
                   <input ref={input} onInput={enterWord} value={newWord} type="text"/>
                   <button>
                       <img src={AddButton} alt=""/>
                   </button>
               </form>

               <div className={styles.wordsTable}>
                   <ul>
                       <li>
                           <h3>Word</h3>
                       </li>
                       <li>
                           <h3>Translation</h3>
                       </li>
                       <li>
                           <h3>Learn</h3>
                       </li>
                   </ul>
                   {library.map((word, index) => (
                       <ul key={index}>
                           <li>
                               {word.word}
                           </li>
                           <li>
                               {word.translate}
                           </li>
                           <li>
                               80%
                           </li>

                           <div className={styles.settings}>
                               <button onClick={() => deleteWord(index)}>
                                   <img src={EditButton} alt=""/>
                               </button>
                               {/*<button>*/}
                                   {/*<img src={DeleteButton} alt=""/>*/}
                               {/*</button>*/}
                           </div>
                       </ul>
                       )
                   )}
               </div>
           </div>
       </section>
    )
}
