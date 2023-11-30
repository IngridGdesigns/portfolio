
import * as React from 'react'

export default function Contact() {
    return (
        <form>
            <div>
                <input type="text" placeholder="first name" />
                <input type="text" placeholder="last name" />
                <input type="text" placeholder="reachMe@example.com" />
                <textarea name="content" rows={4} cols={40} />
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
}