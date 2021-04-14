// https://www.terraform.io/docs/providers/sakuracloud/r/webaccel_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebaccelCertificateConfig extends cdktf.TerraformMetaArguments {
  readonly certificateChain: string;
  readonly privateKey: string;
  readonly siteId: string;
}

// Resource

export class WebaccelCertificate extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WebaccelCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_webaccel_certificate',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateChain = config.certificateChain;
    this._privateKey = config.privateKey;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain: string;
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain
  }

  // dns_names - computed: true, optional: false, required: false
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer_common_name - computed: true, optional: false, required: false
  public get issuerCommonName() {
    return this.getStringAttribute('issuer_common_name');
  }

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey: string;
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // sha256_fingerprint - computed: true, optional: false, required: false
  public get sha256Fingerprint() {
    return this.getStringAttribute('sha256_fingerprint');
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId: string;
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId
  }

  // subject_common_name - computed: true, optional: false, required: false
  public get subjectCommonName() {
    return this.getStringAttribute('subject_common_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_chain: cdktf.stringToTerraform(this._certificateChain),
      private_key: cdktf.stringToTerraform(this._privateKey),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }
}
