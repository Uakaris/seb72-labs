import { Link } from 'react-router-dom';

const MailboxList = (props) => {
    const mailboxListItems = props.mailboxes.map((mailboxes) => (
        <li key={ mailboxes.boxHolder }>
            <Link to={ '/mailboxes' + mailboxes._id }>
                { 'Mailbox ' + mailboxes._id }
            </Link>
        </li>
    ));
    return (
        <>
            <h2>Mailboxes</h2>
            <ul>
                { mailboxListItems }
            </ul>
        </>
    );
};

export default MailboxList;