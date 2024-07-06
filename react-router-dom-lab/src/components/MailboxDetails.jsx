import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
    const { mailboxId } = useParams(); // this retrieves the params via a hook

    const selectedBox = props.mailbox.find((mailbox) => mailbox._id === Number(mailboxId));
    return (
        <>
            <h2>{ selectedBox.boxHolder }'s Mailbox</h2>
            <dl>
                <dt>Box-Size:</dt>
                <dd>{ selectedBox.boxSize }</dd>
            </dl>
        </>
    )
}

export default MailboxDetails;