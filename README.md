# SWAN Homework

A small React + TypeScript component library (built with Vite) providing accessible form building blocks: `FormField`, `CheckBox`, and `HelpText`. Components self-host the Nunito Sans font, are styled with co-located CSS, and forward native DOM props so they behave like their underlying elements. Install dependencies with `npm install`, then run `npm run dev` to start the dev server (`npm run build` for a production build, `npm run preview` to preview it).

## Components

### FormField

Wraps a labelled form control. Renders a `<div>` and forwards all native `<div>` attributes (`className`, `id`, `style`, …).

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | yes | Text shown in the field's label. |
| `required` | `boolean` | no | Adds the `form-field-required` class, rendering a `*` after the label. |
| `children` | `ReactNode` | yes | The control(s) the field wraps (e.g. a `CheckBox`). |
| `...rest` | `ComponentPropsWithoutRef<"div">` | no | Any native `<div>` attribute, spread onto the root element. |

### CheckBox

A custom-styled checkbox built from a visually hidden `<input type="checkbox">` plus a decorative box. Renders a `<label>` wrapping the input and forwards all native `<input>` attributes, so it works in both controlled (`checked` + `onChange`) and uncontrolled (`defaultChecked`) modes. An `id` is auto-generated via `useId` when not supplied.

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | yes | Text shown next to the checkbox. |
| `id` | `string` | no | Input id; auto-generated if omitted. |
| `...rest` | `ComponentPropsWithoutRef<"input">` | no | Any native checkbox attribute — `checked`, `defaultChecked`, `onChange`, `disabled`, `name`, etc. |

### HelpText

A small paragraph for supporting/help text, typically linked to a field via `aria-describedby`. Renders a `<p>` and intentionally exposes only `id` and `className`.

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | `string` | yes | The help text to display. |
| `id` | `string` | no | Element id, useful as an `aria-describedby` target. |
| `className` | `string` | no | Additional class merged with `help-text`. |
