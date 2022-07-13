import { Component } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private faio: FingerprintAIO, private platform: Platform) {}

  async showFingerprint() {
    await this.platform.ready();

    try {
      const available = await this.faio.isAvailable();

      try {
        const val = await this.faio.show({
          title: 'Biometric Authentication',
          subtitle: 'Coolest Plugin ever',
          description: 'Please authenticate',
          fallbackButtonTitle: 'Use Backup',
        });
        alert('success: ' + JSON.stringify(val));
      } catch (error) {
        alert('show error: ' + JSON.stringify(error));
      }
    } catch (error) {
      alert('not available' + JSON.stringify(error));
    }
  }
}
