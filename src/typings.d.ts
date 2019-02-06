
type NgElement = import ('@angular/elements').NgElement;
type WithProperties<T> = import ('@angular/elements').WithProperties<T>;

interface HTMLElementTagNameMap {
  'my-custom-element': NgElement & WithProperties<{myCustomProp: 'bar'}>;
}
