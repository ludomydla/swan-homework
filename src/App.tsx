import CheckBox from "./components/CheckBox/CheckBox"
import FormField from "./components/FormField/FormField"
import HelpText from "./components/HelpText/HelpText"

function App() {

  return (
    <main>
      <form className="form">
        <FormField label="Required field" required >
          <CheckBox defaultChecked={true} label="Checkbox text" name="required-one"/>
          <HelpText text="Example help text"/>
        </FormField>

        <FormField label="Optional field">
          <CheckBox defaultChecked={false} label="" name="optionalA"/>
        </FormField>

        <CheckBox defaultChecked={false} label="Unchecked" name="optionalB"/>
        <CheckBox disabled={true} label="Disabled" name="optionalC"/>

        <button type="submit">Submit</button>
      </form>

    </main>
  )
}

export default App
