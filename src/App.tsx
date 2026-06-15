import { useState } from "react"
import CheckBox from "./components/CheckBox/CheckBox"
import FormField from "./components/FormField/FormField"
import HelpText from "./components/HelpText/HelpText"

function App() {

  const [requiredCb, setRequiredCb] = useState<boolean>(true);
  const [optionalCb, setOptionalCb] = useState<boolean>(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('required', requiredCb);
    console.log('optional', optionalCb);
  }

  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <FormField label="Required field" required >
          <CheckBox checked={requiredCb} onChange={(e) => setRequiredCb(e.target.checked)} label="Checkbox text" />
          <HelpText text="Example help text"/>
        </FormField>

        <FormField label="Optional field">
          <CheckBox checked={optionalCb} onChange={(e) => setOptionalCb(e.target.checked)} label="" />
        </FormField>

        <CheckBox defaultChecked={false} label="Unchecked" name="optionalB"/>
        <CheckBox disabled={true} label="Disabled" name="optionalC"/>
        {/* <button type="submit">Submit</button> */}
      </form>

    </main>
  )
}

export default App
