import { Construct } from 'constructs'
import { App, TerraformStack } from 'cdktf'
import {SakuracloudProvider, Switch} from "./.gen/providers/sakuracloud";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name)

    new SakuracloudProvider(this, 'default', {})
    new Switch(this, "testSwitch", {name: "from-terraform-cdk"});
  }
}

const app = new App()
new MyStack(app, 'example')
app.synth()

