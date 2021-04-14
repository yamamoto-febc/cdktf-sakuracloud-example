// https://www.terraform.io/docs/providers/sakuracloud/r/ssh_key_gen.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SshKeyGenConfig extends cdktf.TerraformMetaArguments {
  /** The description of the SSHKey. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The name of the SSHKey. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** The pass phrase of the private key. The length of this value must be in the range [`8`-`64`] */
  readonly passPhrase?: string;
  /** timeouts block */
  readonly timeouts?: SshKeyGenTimeouts;
}
export interface SshKeyGenTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function sshKeyGenTimeoutsToTerraform(struct?: SshKeyGenTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class SshKeyGen extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SshKeyGenConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_ssh_key_gen',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._passPhrase = config.passPhrase;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // pass_phrase - computed: false, optional: true, required: false
  private _passPhrase?: string;
  public get passPhrase() {
    return this.getStringAttribute('pass_phrase');
  }
  public set passPhrase(value: string ) {
    this._passPhrase = value;
  }
  public resetPassPhrase() {
    this._passPhrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passPhraseInput() {
    return this._passPhrase
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SshKeyGenTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SshKeyGenTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      pass_phrase: cdktf.stringToTerraform(this._passPhrase),
      timeouts: sshKeyGenTimeoutsToTerraform(this._timeouts),
    };
  }
}
