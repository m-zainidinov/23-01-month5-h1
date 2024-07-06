import { useState, useEffect } from 'react'

const NameList = () => {
    const [name, setName] = useState('')
    const [list, setList] = useState([])

    useEffect(() => {
        const addedNames = localStorage.getItem('listOfNames')
        if (addedNames) {
            setList(JSON.parse(addedNames))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('listOfNames', JSON.stringify(list))
    }, [list])

    const handleAddName = () => {
        if (name.trim() !== '') {
            setList([...list, name])
            setName('')
        }
    }

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Insert a name'
            />

            <button onClick={handleAddName}>Add name</button>

            {list.map((name, index) => (
                <p key={index}>{name}</p>
            ))}
        </div>
    )
}

export default NameList