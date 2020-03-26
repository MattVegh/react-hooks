import React, {useState} from "react"

function AddressBook() {
    const [inputData, setInputData] = useState({firstName: "", lastName: ""})
    const [contactsData, setContactsData] = useState([])
    
    function handleChange(event) {
        // update our inputData state
        const {name, value} = event.target
        setInputData(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }
    
    function handleSubmit(event) {
        // add inputData to the contactsData array
        event.preventDefault()
        setContactsData(prevContacts => [...prevContacts, inputData])
        setInputData({
            firstName: '',
            lastName: ''
        })
    }
    
    const contacts = contactsData.map(contact => <h2 key={contact.firstName + contact.lastName}>{contact.firstName} {contact.lastName}</h2>)

    function handleClear(event) {
        event.preventDefault()
        setContactsData([])
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="First Name"
                    name="firstName" 
                    value={inputData.firstName}
                    onChange={handleChange}
                />
                <input 
                    placeholder="Last Name"
                    name="lastName" 
                    value={inputData.lastName}
                    onChange={handleChange}
                />
                <br />
                <button>Add contact</button>
            </form>
            <button onClick={handleClear}>Clear Contacts</button>
            {contacts}
        </>
    )
}

export default AddressBook