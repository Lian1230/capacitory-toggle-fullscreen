
  Pod::Spec.new do |s|
    s.name = 'CapacitorPluginToggleFullscreen'
    s.version = '0.0.1'
    s.summary = ' Toggle screen mode from javascript'
    s.license = 'MIT'
    s.homepage = 'https://github.com/Lian-LF/capacitory-toggle-fullscreen.git'
    s.author = 'Lian-LF'
    s.source = { :git => 'https://github.com/Lian-LF/capacitory-toggle-fullscreen.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end