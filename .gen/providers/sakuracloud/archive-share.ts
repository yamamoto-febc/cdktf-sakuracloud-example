// https://www.terraform.io/docs/providers/sakuracloud/r/archive_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArchiveShareConfig extends cdktf.TerraformMetaArguments {
  /** The id of the archive */
  readonly archiveId: string;
  /** The name of zone that the ArchiveShare will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** timeouts block */
  readonly timeouts?: ArchiveShareTimeouts;
}
export interface ArchiveShareTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function archiveShareTimeoutsToTerraform(struct?: ArchiveShareTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ArchiveShare extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ArchiveShareConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_archive_share',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._archiveId = config.archiveId;
    this._zone = config.zone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_id - computed: false, optional: false, required: true
  private _archiveId: string;
  public get archiveId() {
    return this.getStringAttribute('archive_id');
  }
  public set archiveId(value: string) {
    this._archiveId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveIdInput() {
    return this._archiveId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // share_key - computed: true, optional: false, required: false
  public get shareKey() {
    return this.getStringAttribute('share_key');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ArchiveShareTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ArchiveShareTimeouts ) {
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
      archive_id: cdktf.stringToTerraform(this._archiveId),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: archiveShareTimeoutsToTerraform(this._timeouts),
    };
  }
}
