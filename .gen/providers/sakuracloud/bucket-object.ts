// https://www.terraform.io/docs/providers/sakuracloud/r/bucket_object.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BucketObjectConfig extends cdktf.TerraformMetaArguments {
  /** The access key for using SakuraCloud Object Storage API */
  readonly accessKey?: string;
  /** The name of the bucket */
  readonly bucket: string;
  /** The content to upload to as the bucket object. This conflicts with [`source`] */
  readonly content?: string;
  /** The content-type of the bucket object */
  readonly contentType?: string;
  /** The etag of the bucket object */
  readonly etag?: string;
  /** The name of the bucket object */
  readonly key: string;
  /** The secret key for using SakuraCloud Object Storage API */
  readonly secretKey?: string;
  /** The file path to upload to as the bucket object. This conflicts with [`content`] */
  readonly source?: string;
}

// Resource

export class BucketObject extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BucketObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_bucket_object',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessKey = config.accessKey;
    this._bucket = config.bucket;
    this._content = config.content;
    this._contentType = config.contentType;
    this._etag = config.etag;
    this._key = config.key;
    this._secretKey = config.secretKey;
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string;
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string ) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // content - computed: false, optional: true, required: false
  private _content?: string;
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string ) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType
  }

  // etag - computed: true, optional: true, required: false
  private _etag?: string;
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag
  }

  // http_cache_url - computed: true, optional: false, required: false
  public get httpCacheUrl() {
    return this.getStringAttribute('http_cache_url');
  }

  // http_path_url - computed: true, optional: false, required: false
  public get httpPathUrl() {
    return this.getStringAttribute('http_path_url');
  }

  // http_url - computed: true, optional: false, required: false
  public get httpUrl() {
    return this.getStringAttribute('http_url');
  }

  // https_cache_url - computed: true, optional: false, required: false
  public get httpsCacheUrl() {
    return this.getStringAttribute('https_cache_url');
  }

  // https_path_url - computed: true, optional: false, required: false
  public get httpsPathUrl() {
    return this.getStringAttribute('https_path_url');
  }

  // https_url - computed: true, optional: false, required: false
  public get httpsUrl() {
    return this.getStringAttribute('https_url');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key: string;
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string;
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string ) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      bucket: cdktf.stringToTerraform(this._bucket),
      content: cdktf.stringToTerraform(this._content),
      content_type: cdktf.stringToTerraform(this._contentType),
      etag: cdktf.stringToTerraform(this._etag),
      key: cdktf.stringToTerraform(this._key),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      source: cdktf.stringToTerraform(this._source),
    };
  }
}
