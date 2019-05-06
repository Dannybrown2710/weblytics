
export default class SyntheticClick {
    eventMap = {};
    constructor() {

       
    }
    getEvents() {
        return this.eventMap;
    }
    
    registerClick(){
        let DOMEvents : {mouseEvent:string[]}  = {
            mouseEvent: ["click"]
            //mouseEvent: ["click", "contextmenu", "dblclick", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout" ,"mouseover", "mouseup", "show"]
            // UIEvent: "abort DOMActivate error load resize scroll select unload",
            // ProgressEvent: "abort error load loadend loadstart progress progress timeout",
            // Event: "abort afterprint beforeprint cached canplay canplaythrough change chargingchange chargingtimechange checking close dischargingtimechange DOMContentLoaded downloading durationchange emptied ended ended error error error error fullscreenchange fullscreenerror input invalid languagechange levelchange loadeddata loadedmetadata noupdate obsolete offline online open open orientationchange pause pointerlockchange pointerlockerror play playing ratechange readystatechange reset seeked seeking stalled submit success suspend timeupdate updateready visibilitychange volumechange waiting",
            // AnimationEvent: "animationend animationiteration animationstart",
            // AudioProcessingEvent: "audioprocess",
            // BeforeUnloadEvent: "beforeunload",
            // TimeEvent: "beginEvent endEvent repeatEvent",
            // OtherEvent: "blocked complete upgradeneeded versionchange",
            // FocusEvent: "blur DOMFocusIn  Unimplemented DOMFocusOut  Unimplemented focus focusin focusout",
            // MouseEvent: "click contextmenu dblclick mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup show",
            // SensorEvent: "compassneedscalibration Unimplemented userproximity",
            // OfflineAudioCompletionEvent: "complete",
            // CompositionEvent: "compositionend compositionstart compositionupdate",
            // ClipboardEvent: "copy cut paste",
            // DeviceLightEvent: "devicelight",
            // DeviceMotionEvent: "devicemotion",
            // DeviceOrientationEvent: "deviceorientation",
            // DeviceProximityEvent: "deviceproximity",
            // MutationNameEvent: "DOMAttributeNameChanged DOMElementNameChanged",
            // MutationEvent: "DOMAttrModified DOMCharacterDataModified DOMNodeInserted DOMNodeInsertedIntoDocument DOMNodeRemoved DOMNodeRemovedFromDocument DOMSubtreeModified",
            // DragEvent: "drag dragend dragenter dragleave dragover dragstart drop",
            // GamepadEvent: "gamepadconnected gamepaddisconnected",
            // HashChangeEvent: "hashchange",
            // KeyboardEvent: "keydown keypress keyup",
            // MessageEvent: "message message message message",
            // PageTransitionEvent: "pagehide pageshow",
            // PopStateEvent: "popstate",
            // StorageEvent: "storage",
            // SVGEvent: "SVGAbort SVGError SVGLoad SVGResize SVGScroll SVGUnload",
            // SVGZoomEvent: "SVGZoom",
            // TouchEvent: "touchcancel touchend touchenter touchleave touchmove touchstart",
            // TransitionEvent: "transitionend",
            // WheelEvent: "wheel"
        } 
        let RecentlyLoggedDOMEventTypes = {};

        for (const DOMEvent of Object.keys(DOMEvents)) {

            let DOMEventTypes = (DOMEvents as any)[DOMEvent];

            DOMEventTypes.filter(function (DOMEventType) {
                var DOMEventCategory = DOMEvent + ' ' + DOMEventType;
                window.addEventListener(DOMEventType, function (e) {
                    if (RecentlyLoggedDOMEventTypes[DOMEventCategory]) return;
                    RecentlyLoggedDOMEventTypes[DOMEventCategory] = true;
                    setTimeout(function () { RecentlyLoggedDOMEventTypes[DOMEventCategory] = false }, 5000);
                    var isActive = e.target == document.activeElement;
                    console.log(DOMEventCategory , "target",e.target.innerHTML);
                    if (isActive) {
                        // console.info(DOMEventCategory,
                        //     ' target=', e.target,
                        //     ' active=', document.activeElement,
                        //     ' isActive=', true);
                    } else {
                        // console.log(DOMEventCategory,
                        //     ' target=', e.target,
                        //     ' active=', document.activeElement,
                        //     ' isActive=', false);
                    }

                }, true);
            });

        }
        
    }
}