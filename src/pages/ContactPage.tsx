import Header from "../components/Header";
import { useForm } from 'react-hook-form';

function ContactPage() {
  return (
    <>
      <Header />


      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ContactPage;