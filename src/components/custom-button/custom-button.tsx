import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'custom-button',
  styleUrl: 'custom-button.css',
  shadow: true,
})
export class CustomButton {
  render() {
    return <Host></Host>;
  }
}
