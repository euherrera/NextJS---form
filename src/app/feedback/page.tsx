"use client"
import styles from '../page.module.css'
import { useState, FormEvent, ChangeEvent } from 'react'
import { useRouter } from "next/navigation"

const initState = {
    name: "",
    email:"",
    message:"",
}

export default function Feedback() {
    const [data, setData ] = useState(initState)
    const router = useRouter()

    const handleSubmit = async (event: FormEvent <HTMLFormElement>) => {
        event.preventDefault()
        // console.log('data', JSON.stringify(data))

        const { name, email, message } = data

        // Send data to API route
        const res = await fetch('http://localhost:3000/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, message
            })
        })

        const result = await res.json()
        if (result) {
            router.replace("/thank-you");

        }
        
        console.log(result)
    }

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({...values, [name]: value}))
  }

    const form = (
        <>
            <main className={styles.main}>
            <h1 className="headings">Leave Feedback</h1>
            <form  onSubmit={handleSubmit}>
                <label>Name:</label><br />
                <input 
                    className="fields" 
                    type="text" 
                    name="name"  
                    value={data.name || ""}
                    onChange={handleChange} 
                    placeholder="name"
                />
                <br />
                <br />
                <label>Email:</label><br />
                <input 
                    className="fields" 
                    type="email" 
                    name="email" 
                    value={data.email || ""}
                    onChange={handleChange} 
                    placeholder="email"
                />
                <br />
                <br />
                <label>Message:</label><br />
                <textarea 
                    className="fieldArea" 
                    name="message" 
                    value={data.message || ""}
                    onChange={handleChange} 
                    placeholder="message"
                />
                <br />
                <br />
                <button className="formSubmit" type='submit' >Submit</button>
            </form>
            </main>
        </>
        
    )

    return form
}