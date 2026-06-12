function App() {

  return (
    <main>
      <div>
        <FormField label="Required field" required >
          <CheckBox checked={true} label="Checkbox text"/>
          <Helptext text="Example help text"/>
        </FormField>

        <FormField label="Optional field">
          <CheckBox checked={false} label=""/>
        </FormField>

        <CheckBox checked={false} label="Unchecked"/>
        <CheckBox disabled={true} label="Disabled"/>
      </div>

    </main>
  )
}

export default App
