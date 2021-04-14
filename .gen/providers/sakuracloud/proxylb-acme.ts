// https://www.terraform.io/docs/providers/sakuracloud/r/proxylb_acme.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProxylbAcmeConfig extends cdktf.TerraformMetaArguments {
  /** The flag to accept the current Let's Encrypt terms of service(see: https://letsencrypt.org/repository/). This must be set `true` explicitly */
  readonly acceptTos: boolean;
  /** The FQDN used by ACME. This must set resolvable value */
  readonly commonName: string;
  /** The id of the ProxyLB that set ACME settings to */
  readonly proxylbId: string;
  /** The wait time in seconds. This typically used for waiting for a DNS propagation */
  readonly updateDelaySec?: number;
  /** timeouts block */
  readonly timeouts?: ProxylbAcmeTimeouts;
}
export class ProxylbAcmeCertificateAdditionalCertificate extends cdktf.ComplexComputedList {

  // intermediate_cert - computed: true, optional: false, required: false
  public get intermediateCert() {
    return this.getStringAttribute('intermediate_cert');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // server_cert - computed: true, optional: false, required: false
  public get serverCert() {
    return this.getStringAttribute('server_cert');
  }
}
export class ProxylbAcmeCertificate extends cdktf.ComplexComputedList {

  // additional_certificate - computed: true, optional: false, required: false
  public get additionalCertificate() {
    return this.interpolationForAttribute('additional_certificate') as any;
  }

  // intermediate_cert - computed: true, optional: false, required: false
  public get intermediateCert() {
    return this.getStringAttribute('intermediate_cert');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // server_cert - computed: true, optional: false, required: false
  public get serverCert() {
    return this.getStringAttribute('server_cert');
  }
}
export interface ProxylbAcmeTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function proxylbAcmeTimeoutsToTerraform(struct?: ProxylbAcmeTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class ProxylbAcme extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ProxylbAcmeConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_proxylb_acme',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acceptTos = config.acceptTos;
    this._commonName = config.commonName;
    this._proxylbId = config.proxylbId;
    this._updateDelaySec = config.updateDelaySec;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_tos - computed: false, optional: false, required: true
  private _acceptTos: boolean;
  public get acceptTos() {
    return this.getBooleanAttribute('accept_tos');
  }
  public set acceptTos(value: boolean) {
    this._acceptTos = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptTosInput() {
    return this._acceptTos
  }

  // certificate - computed: true, optional: false, required: false
  public certificate(index: string) {
    return new ProxylbAcmeCertificate(this, 'certificate', index);
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName: string;
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // proxylb_id - computed: false, optional: false, required: true
  private _proxylbId: string;
  public get proxylbId() {
    return this.getStringAttribute('proxylb_id');
  }
  public set proxylbId(value: string) {
    this._proxylbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxylbIdInput() {
    return this._proxylbId
  }

  // update_delay_sec - computed: false, optional: true, required: false
  private _updateDelaySec?: number;
  public get updateDelaySec() {
    return this.getNumberAttribute('update_delay_sec');
  }
  public set updateDelaySec(value: number ) {
    this._updateDelaySec = value;
  }
  public resetUpdateDelaySec() {
    this._updateDelaySec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDelaySecInput() {
    return this._updateDelaySec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ProxylbAcmeTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ProxylbAcmeTimeouts ) {
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
      accept_tos: cdktf.booleanToTerraform(this._acceptTos),
      common_name: cdktf.stringToTerraform(this._commonName),
      proxylb_id: cdktf.stringToTerraform(this._proxylbId),
      update_delay_sec: cdktf.numberToTerraform(this._updateDelaySec),
      timeouts: proxylbAcmeTimeoutsToTerraform(this._timeouts),
    };
  }
}
