import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
    const { mailboxId } = useParams(); // this retrieves the params via a hook

    const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
    return (
        <>
            <h1>{ selectedBox.boxHolder }'s Mailbox</h1>
            <h2>Details</h2>
                <p>Mailbox ID: { selectedBox._id }</p>
                <p>Box-Size: { selectedBox.boxSize }</p>
        </>
    )
}

export default MailboxDetails;