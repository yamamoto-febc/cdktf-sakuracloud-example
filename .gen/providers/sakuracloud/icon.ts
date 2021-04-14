// https://www.terraform.io/docs/providers/sakuracloud/r/icon.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IconConfig extends cdktf.TerraformMetaArguments {
  /** The base64 encoded content to upload to as the Icon. This conflicts with [`source`] */
  readonly base64Content?: string;
  /** The name of the Icon. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** The file path to upload to as the Icon. This conflicts with [`base64content`] */
  readonly source?: string;
  /** Any tags to assign to the Icon */
  readonly tags?: string[];
  /** timeouts block */
  readonly timeouts?: IconTimeouts;
}
export interface IconTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function iconTimeoutsToTerraform(struct?: IconTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Icon extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IconConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_icon',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._base64Content = config.base64Content;
    this._name = config.name;
    this._source = config.source;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64content - computed: false, optional: true, required: false
  private _base64Content?: string;
  public get base64Content() {
    return this.getStringAttribute('base64content');
  }
  public set base64Content(value: string ) {
    this._base64Content = value;
  }
  public resetBase64Content() {
    this._base64Content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64ContentInput() {
    return this._base64Content
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

  // source - computed: false, optional: true, required: false
  private _source?: string;
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string ) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[];
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IconTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IconTimeouts ) {
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
      base64content: cdktf.stringToTerraform(this._base64Content),
      name: cdktf.stringToTerraform(this._name),
      source: cdktf.stringToTerraform(this._source),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: iconTimeoutsToTerraform(this._timeouts),
    };
  }
}
