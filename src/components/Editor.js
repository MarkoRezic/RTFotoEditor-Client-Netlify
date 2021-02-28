import { Form } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { AuthorityContext } from './AuthorityContext';
import { checkText } from 'smile2emoji';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import BootstrapIcon from '../svg icons/BootstrapIcon';
import { SliderPicker } from 'react-color';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import TEMPLATE from '../images/presetFilters/presetTemplate.png';
import VINTAGE from '../images/presetFilters/VINTAGE.png';
import LOMO from '../images/presetFilters/LOMO.png';
import CLARITY from '../images/presetFilters/CLARITY.png';
import SINCITY from '../images/presetFilters/SINCITY.png';
import SUNRISE from '../images/presetFilters/SUNRISE.png';
import CROSSPROCESS from '../images/presetFilters/CROSSPROCESS.png';
import ORANGEPEEL from '../images/presetFilters/ORANGEPEEL.png';
import LOVE from '../images/presetFilters/LOVE.png';
import GRUNGY from '../images/presetFilters/GRUNGY.png';
import JARQUES from '../images/presetFilters/JARQUES.png';
import PINHOLE from '../images/presetFilters/PINHOLE.png';
import OLDBOOT from '../images/presetFilters/OLDBOOT.png';
import GLOWINGSUN from '../images/presetFilters/GLOWINGSUN.png';
import HAZYDAYS from '../images/presetFilters/HAZYDAYS.png';
import HERMAJESTY from '../images/presetFilters/HERMAJESTY.png';
import NOSTALGIA from '../images/presetFilters/NOSTALGIA.png';
import HEMINGWAY from '../images/presetFilters/HEMINGWAY.png';
import CONCENTRATE from '../images/presetFilters/CONCENTRATE.png';

const Editor = (props) => {
    /* eslint-disable */
    const [userList, stUserList, currentUser, setCurrentUser] = useContext(AuthorityContext);
    Axios.defaults.withCredentials = true;
    let url = 'https://rt-foto-editor.herokuapp.com';
    //let url = 'http://localhost:3001';
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [isRendering, setIsRendering] = useState(false);
    const [currentRotate, setCurrentRotate] = useState(0);
    const [currentWidth, setCurrentWidth] = useState(100);
    const [currentHeight, setCurrentHeight] = useState(100);
    const [currentCrop, setCurrentCrop] = useState({
        unit: '%',
        x: 0,
        y: 0,
        width: 100,
        height: 100,
    })
    const cropReset = {
        unit: '%',
        x: 0,
        y: 0,
        width: 100,
        height: 100,
    }
    const [description, setDescription] = useState('');
    const [postView, setPostView] = useState('Public');
    const [isLoading, setIsLoading] = useState(false);
    const [activeTransformContainer, setActiveTransformContainer] = useState(-1);
    const [activeFilterContainer, setActiveFilterContainer] = useState(-1);
    const [currentPreset, setCurrentPreset] = useState('');
    const [previousPreset, setPreviousPreset] = useState('initial');
    const [currentColor, setCurrentColor] = useState('#B3DEE5');
    const [endColor, setEndColor] = useState('#B3DEE5');
    const [currentVignetteSize, setCurrentVignetteSize] = useState(0);
    const [currentVignetteStrength, setCurrentVignetteStrength] = useState(0);
    const [currentOpacity, setCurrentOpacity] = useState(1);
    const [isPNG, setIsPNG] = useState(false);
    const [imageQuality, setImageQuality] = useState(0.8);
    const [postOriginal, setPostOriginal] = useState(false);
    const [renderPaused, setRenderPaused] = useState(false);
    const [fileName, setFileName] = useState("");
    const [values, setValues] = useState({
        brightness: 0,          //-100 .. 100
        contrast: 0,            //-100 .. 100
        exposure: 0,            //-100 .. 100
        stackBlur: 0,           //   0 .. 8

        saturation: 0,          //-100 .. 100
        vibrance: 0,            //-100 .. 100
        hue: 0,                 //   0 .. 100
        clip: 0,                //   0 .. 100

        channelR: 0,            //-100 .. 100 
        channelG: 0,            //-100 .. 100 
        channelB: 0,            //-100 .. 100 
        greyscale: false,       //true .. false

        colorizeStrength: 0,    //   0 .. 100

        gamma: 1,               //   0 .1. 4
        presetFilter: '',

        mirrorX: 0,             //   0 .. 1
        mirrorY: 0,             //   0 .. 1

        resizeWidth: 100,       //   1 .. 100%
        resizeHeight: 100,      //   1 .. 100%

        rotateAngle: 0,         //   0 .. 360

        opacity: 1,             //   0 .. 1

        vignetteSize: 0,        //   0 .. 100%
        vignetteStrength: 0,    //   0 .. 100
        sepia: 0,               //   0 .. 100
        noise: 0,               //   0 .. 100
        invert: false,          //true .. false
        dither: false,          //true .. false
        ditherAlgo: 0,          //   0 .. 7
        sharpen: 0,             //   0 .. 60
        radialBlur: 0,          //   0 .. 3
        motionBlurAngle: 45,    //   0 .. 360
        motionBlurLayers: 0,    //   0 .. 3
    });
    const resetValues = {
        brightness: 0,          //-100 .. 100
        contrast: 0,            //-100 .. 100
        exposure: 0,            //-100 .. 100
        stackBlur: 0,           //   0 .. 8

        saturation: 0,          //-100 .. 100
        vibrance: 0,            //-100 .. 100
        hue: 0,                 //   0 .. 100
        clip: 0,                //   0 .. 100

        channelR: 0,            //-100 .. 100 
        channelG: 0,            //-100 .. 100 
        channelB: 0,            //-100 .. 100 
        greyscale: false,       //true .. false

        colorizeStrength: 0,    //   0 .. 100

        gamma: 1,               //   0 .1. 4
        presetFilter: '',

        mirrorX: 0,             //   0 .. 1
        mirrorY: 0,             //   0 .. 1

        resizeWidth: 100,       //   1 .. 100%
        resizeHeight: 100,      //   1 .. 100%

        rotateAngle: 0,         //   0 .. 360

        opacity: 1,             //   0 .. 1

        vignetteSize: 0,        //   0 .. 100%
        vignetteStrength: 0,    //   0 .. 100
        sepia: 0,               //   0 .. 100
        noise: 0,               //   0 .. 100
        invert: false,          //true .. false
        dither: false,          //true .. false
        ditherAlgo: 0,          //   0 .. 7
        sharpen: 0,             //   0 .. 60
        radialBlur: 0,          //   0 .. 3
        motionBlurAngle: 45,    //   0 .. 360
        motionBlurLayers: 0,    //   0 .. 3
    };
    const [userVerified, setUserVerified] = useState(false);
    var canvas, canvasCopy, presetCopy;
    var ctxPreset, ctxCopy;

    var img = new Image();
    const ditherAlgorithms = [
        "floyd-steinberg",
        "jarvis-judice-ninke",
        "stucki",
        "atkinson",
        "burkes",
        "sierra",
        "two-row-sierra",
        "sierra-lite"
    ];

    useEffect(() => {
        canvas = document.getElementById("canvas");
        presetCopy = document.getElementById("presetCopy");
        canvasCopy = document.getElementById("canvasCopy");
        ctxPreset = presetCopy.getContext("2d");
        ctxCopy = canvasCopy.getContext("2d");
        img = new Image();
        setFileName("");
        //Creating crop plugin
        window.Caman.Plugin.register("cloneCanvas", function (canvasCopy, newID) {
            var canvas, ctx;
            canvas = document.createElement('canvas');
            cloneAttributes(canvasCopy, canvas);
            if (canvas) {
                canvas.removeAttribute("data-caman-id");
                canvas.setAttribute('id', newID);
            }
            canvas.width = canvasCopy.width;
            canvas.height = canvasCopy.height;
            ctx = canvas.getContext('2d');
            ctx.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvasCopy.width, canvasCopy.height);
            return this.replaceCanvas(canvas);
        });

        window.Caman.Plugin.register("mirror", function (x, y) {
            if (x !== 1 && y !== 1) return;
            var canvas, ctx;
            canvas = document.createElement('canvas');
            cloneAttributes(this.canvas, canvas);
            if (canvas) canvas.removeAttribute("data-caman-id");
            canvas.width = this.canvas.width;
            canvas.height = this.canvas.height;
            ctx = canvas.getContext('2d');
            if (x === 1 && y === 1) {
                ctx.scale(-1, -1);
                ctx.drawImage(this.canvas, 0, 0, -this.canvas.width, -this.canvas.height);
            }
            else if (x === 1) {
                ctx.scale(-1, 1);
                ctx.drawImage(this.canvas, 0, 0, -this.canvas.width, this.canvas.height);
            }
            else {
                ctx.scale(1, -1);
                ctx.drawImage(this.canvas, 0, 0, this.canvas.width, -this.canvas.height);
            }
            return this.replaceCanvas(canvas);
        });

        window.Caman.Plugin.register("crop", function (width, height, x, y) {
            width /= 100;
            height /= 100;
            x /= 100;
            y /= 100;
            var canvas, ctx;
            if (x == null) {
                x = 0;
            }
            if (y == null) {
                y = 0;
            }
            canvas = document.createElement('canvas');
            cloneAttributes(this.canvas, canvas);
            if (canvas) canvas.removeAttribute("data-caman-id");
            canvas.width = width * this.canvas.width;
            canvas.height = height * this.canvas.height;
            ctx = canvas.getContext('2d');
            ctx.drawImage(this.canvas, x * this.canvas.width, y * this.canvas.height, width * this.canvas.width, height * this.canvas.height, 0, 0, width * this.canvas.width, height * this.canvas.height);
            this.cropCoordinates = {
                x: x,
                y: y
            };
            this.cropped = true;
            return this.replaceCanvas(canvas);
        });

        window.Caman.Plugin.register("resizePercent", function (newDims) {
            var canvas, ctx;
            if (newDims == null) {
                newDims = null;
            }
            if (newDims === null || ((newDims.width == null) && (newDims.height == null))) {
                console.error("Invalid or missing dimensions given for resize");
                return;
            }
            if (newDims.width == null) {
                newDims.height /= 100;
                newDims.width = newDims.height;
            } else if (newDims.height == null) {
                newDims.width /= 100;
                newDims.height = newDims.width;
            }
            else {
                newDims.width /= 100;
                newDims.height /= 100;
            }
            canvas = document.createElement('canvas');
            cloneAttributes(this.canvas, canvas);
            if (canvas) canvas.removeAttribute("data-caman-id");
            canvas.width = newDims.width * this.canvas.width;
            canvas.height = newDims.height * this.canvas.height;
            ctx = canvas.getContext('2d');
            ctx.drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0, newDims.width * this.canvas.width, newDims.height * this.canvas.height);
            this.resized = true;
            return this.replaceCanvas(canvas);
        });

        window.Caman.Plugin.register("resize", function (newDims) {
            var canvas, ctx;
            if (newDims == null) {
                newDims = null;
            }
            if (newDims === null || ((newDims.width == null) && (newDims.height == null))) {
                console.error("Invalid or missing dimensions given for resize");
                return;
            }
            if (newDims.width === 0 || newDims.height === 0) return;
            if (newDims.width == null) {
                newDims.width = this.canvas.width * newDims.height / this.canvas.height;
            } else if (newDims.height == null) {
                newDims.height = this.canvas.height * newDims.width / this.canvas.width;
            }
            canvas = document.createElement('canvas');
            cloneAttributes(this.canvas, canvas);
            if (canvas) canvas.removeAttribute("data-caman-id");
            canvas.width = newDims.width;
            canvas.height = newDims.height;
            ctx = canvas.getContext('2d');
            ctx.drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0, newDims.width, newDims.height);
            this.resized = true;
            return this.replaceCanvas(canvas);
        });

        window.Caman.Plugin.register("rotate", function (degrees) {
            var angle, canvas, ctx, height, to_radians, width;
            angle = degrees % 360;
            if (angle === 0) {
                return this.dimensions = {
                    width: this.canvas.width,
                    height: this.canvas.height
                };
            }
            to_radians = Math.PI / 180;
            canvas = document.createElement('canvas');
            cloneAttributes(this.canvas, canvas);
            width = this.canvas.width;
            height = this.canvas.height;
            if (angle === 90 || angle === -90 || angle === 270 || angle === -270) {
                canvas.width = height;
                canvas.height = width;
            }
            else if (angle === 180 || angle === -180) {
                canvas.width = width;
                canvas.height = height;
            }
            else {
                canvas.width = width > height ? width : height;
                canvas.height = width > height ? width : height;
            }
            ctx = canvas.getContext('2d');
            //ctx.save();
            if (angle === 90 || angle === -90 || angle === 270 || angle === -270) {
                ctx.translate(height / 2, width / 2);
            }
            else if (angle === 180 || angle === -180) {
                ctx.translate(width / 2, height / 2);
            }
            else {
                if (width > height) ctx.translate(width / 2, width / 2);
                else ctx.translate(height / 2, height / 2);
            }
            ctx.rotate(angle * to_radians);
            ctx.translate(-width / 2, -height / 2);
            ctx.drawImage(this.canvas, 0, 0, width, height);
            //ctx.restore();


            return this.replaceCanvas(canvas);
        });

        window.Caman.Plugin.register("opacity", function (opacity) {
            if (opacity === null || opacity > 1 || opacity < 0) return;
            var canvas, ctx;
            canvas = document.createElement('canvas');
            cloneAttributes(this.canvas, canvas);
            if (canvas) canvas.removeAttribute("data-caman-id");
            canvas.width = this.canvas.width;
            canvas.height = this.canvas.height;
            ctx = canvas.getContext('2d');
            ctx.globalAlpha = opacity;
            ctx.drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height);
            return this.replaceCanvas(canvas);
        });

        window.Caman.Plugin.register("dither", function (algo) {
            var algos, b, clampedVal, curAlgo, error, errorX, errorY, g, height, i, ind, isBlack, j, luminance, matrixWidthAdj, newVal, output, pixels, r, value, width, x, y, _i, _j, _k, _l, _m, _n, _o, _p, _ref, _ref1;
            pixels = this.pixelData;
            width = this.dimensions.width;
            height = this.dimensions.height;
            output = (function () {
                var _i, _results;
                _results = [];
                for (i = _i = 0; 0 <= width ? _i < width : _i > width; i = 0 <= width ? ++_i : --_i) {
                    _results.push((function () {
                        var _j, _results1;
                        _results1 = [];
                        for (j = _j = 0; 0 <= height ? _j < height : _j > height; j = 0 <= height ? ++_j : --_j) {
                            _results1.push(0);
                        }
                        return _results1;
                    })());
                }
                return _results;
            })();
            algos = {
                "floyd-steinberg": {
                    matrix: [[0, 0, 7], [3, 5, 1]],
                    divisor: 16
                },
                "jarvis-judice-ninke": {
                    matrix: [[0, 0, 0, 7, 5], [3, 5, 7, 5, 3], [1, 3, 5, 3, 1]],
                    divisor: 48
                },
                "stucki": {
                    matrix: [[0, 0, 0, 8, 4], [2, 4, 8, 4, 2], [1, 2, 4, 2, 1]],
                    divisor: 42
                },
                "atkinson": {
                    matrix: [[0, 0, 0, 1, 1], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]],
                    divisor: 8
                },
                "burkes": {
                    matrix: [[0, 0, 0, 8, 4], [2, 4, 8, 4, 2]],
                    divisor: 32
                },
                "sierra": {
                    matrix: [[0, 0, 0, 5, 3], [2, 4, 5, 4, 2], [0, 2, 3, 2, 0]],
                    divisor: 32
                },
                "two-row-sierra": {
                    matrix: [[0, 0, 0, 4, 3], [1, 2, 3, 2, 1]],
                    divisor: 16
                },
                "sierra-lite": {
                    matrix: [[0, 0, 2], [1, 1, 0]],
                    divisor: 4
                }
            };
            curAlgo = algos[algo];
            matrixWidthAdj = Math.floor(curAlgo.matrix[0].length / 2);
            ind = (function (_this) {
                return function (x, y) {
                    return (y * width + x) * 4;
                };
            })(this);
            for (y = _i = 0; 0 <= height ? _i < height : _i > height; y = 0 <= height ? ++_i : --_i) {
                for (x = _j = 0; 0 <= width ? _j < width : _j > width; x = 0 <= width ? ++_j : --_j) {
                    r = pixels[ind(x, y)];
                    g = pixels[ind(x, y) + 1];
                    b = pixels[ind(x, y) + 2];
                    luminance = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
                    output[x][y] = luminance;
                }
            }
            for (y = _k = 0; 0 <= height ? _k < height : _k > height; y = 0 <= height ? ++_k : --_k) {
                for (x = _l = 0; 0 <= width ? _l < width : _l > width; x = 0 <= width ? ++_l : --_l) {
                    newVal = output[x][y] > 128 ? 255 : 0;
                    clampedVal = Math.max(0, Math.min(output[x][y], 255));
                    error = (clampedVal - newVal) / curAlgo.divisor;
                    output[x][y] = newVal;
                    for (i = _m = 0, _ref = curAlgo.matrix.length; 0 <= _ref ? _m < _ref : _m > _ref; i = 0 <= _ref ? ++_m : --_m) {
                        for (j = _n = 0, _ref1 = curAlgo.matrix[i].length; 0 <= _ref1 ? _n < _ref1 : _n > _ref1; j = 0 <= _ref1 ? ++_n : --_n) {
                            errorX = x + j - matrixWidthAdj;
                            errorY = y + i;
                            if (!(errorX < 0 || errorX >= width || errorY >= height)) {
                                output[errorX][errorY] += error * curAlgo.matrix[i][j];
                            }
                        }
                    }
                }
            }
            for (y = _o = 0; 0 <= height ? _o < height : _o > height; y = 0 <= height ? ++_o : --_o) {
                for (x = _p = 0; 0 <= width ? _p < width : _p > width; x = 0 <= width ? ++_p : --_p) {
                    isBlack = output[x][y] < 128;
                    value = isBlack ? 0 : 255;
                    pixels[ind(x, y)] = value;
                    pixels[ind(x, y) + 1] = value;
                    pixels[ind(x, y) + 2] = value;
                }
            }
            return this;
        });

        window.Caman.Filter.register("cloneCanvas", function () {
            return this.processPlugin("cloneCanvas", Array.prototype.slice.call(arguments, 0));
        });

        window.Caman.Filter.register("mirror", function () {
            return this.processPlugin("mirror", Array.prototype.slice.call(arguments, 0));
        });

        window.Caman.Filter.register("crop", function () {
            return this.processPlugin("crop", Array.prototype.slice.call(arguments, 0));
        });

        window.Caman.Filter.register("resizePercent", function () {
            return this.processPlugin("resizePercent", Array.prototype.slice.call(arguments, 0));
        });

        window.Caman.Filter.register("resize", function () {
            return this.processPlugin("resize", Array.prototype.slice.call(arguments, 0));
        });

        window.Caman.Filter.register("rotate", function () {
            return this.processPlugin("rotate", Array.prototype.slice.call(arguments, 0));
        });

        window.Caman.Filter.register("opacity", function () {
            return this.processPlugin("opacity", Array.prototype.slice.call(arguments, 0));
        });

        window.Caman.Filter.register("compoundMotionBlur", function (layers, degrees) {
            if (layers === null || layers < 1) return;
            for (var i = 0; i < layers; i++) {
                this.motionBlur(degrees);
            }
        });

        window.Caman.Filter.register("compoundRadialBlur", function (layers) {
            if (layers === null || layers < 1) return;
            for (var i = 0; i < layers; i++) {
                this.radialBlur();
            }
        });

        window.Caman.Filter.register("motionBlur", function (degrees) {
            var kernel;
            degrees %= 360;
            if (degrees === 0 || degrees === 180) {
                kernel = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0];
            } else if ((degrees > 0 && degrees < 90) || (degrees > 180 && degrees < 270)) {
                kernel = [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0];
            } else if (degrees === 90 || degrees === 270) {
                kernel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            } else {
                kernel = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
            }
            return this.processKernel("Motion Blur", kernel);
        });

        window.Caman.Filter.register("sharpen", function (amt) {
            if (amt == null) {
                amt = 100;
            }
            amt /= 100;
            return this.processKernel("Sharpen", [0, -amt, 0, -amt, 4 * amt + 1, -amt, 0, -amt, 0]);
        });

        window.Caman.Filter.register("dither", function (algo) {
            if (algo == null) {
                algo = "floyd-steinberg";
            }
            return this.processPlugin("dither", [algo]);
        });

    }, []);

    /* eslint-enable */
    useEffect(() => {
        if(currentUser) setUserVerified(currentUser.verified === 'verified' ? true : false);
        console.log(currentUser);
    }, [currentUser, setCurrentUser])

    useEffect(() => {
        if (!isRendering && !renderPaused) {
            setIsRendering(true);
            if (currentPreset !== previousPreset) {
                window.Caman("#presetCopy", img, function () {
                    this.revert(false)
                    this.resize(this.canvas.width > this.canvas.height ? { width: 500 } : { height: 500 })

                    switch (values.presetFilter) {
                        case 'vintage': this.vintage(); break;
                        case 'lomo': this.lomo(); break;
                        case 'clarity': this.clarity(); break;
                        case 'sinCity': this.sinCity(); break;
                        case 'sunrise': this.sunrise(); break;
                        case 'crossProcess': this.crossProcess(); break;
                        case 'orangePeel': this.orangePeel(); break;
                        case 'love': this.love(); break;
                        case 'grungy': this.grungy(); break;
                        case 'jarques': this.jarques(); break;
                        case 'pinhole': this.pinhole(); break;
                        case 'oldBoot': this.oldBoot(); break;
                        case 'glowingSun': this.glowingSun(); break;
                        case 'hazyDays': this.hazyDays(); break;
                        case 'herMajesty': this.herMajesty(); break;
                        case 'nostalgia': this.nostalgia(); break;
                        case 'hemingway': this.hemingway(); break;
                        case 'concentrate': this.concentrate(); break;
                        default: break;
                    }
                    this.render(function () {
                        copyCanvas();
                    });
                });
            }
            else copyCanvas();
        }
        //eslint-disable-next-line
    }, [values, endColor, renderPaused]);

    function resizeCanvas(){
        window.Caman("#presetCopy", img, function () {
            this.resize(this.canvas.width > this.canvas.height ? { width: 500 } : { height: 500 })
            this.render(function () {
                copyCanvas();
            });
        });
    }

    function copyCanvas() {
        presetCopy = document.getElementById("presetCopy");
        if (presetCopy) {
            window.Caman("#canvasCopy", img, function () {
                this.revert(false)
                //this.resize(this.canvas.width > this.canvas.height ? { width: 500 } : { height: 500 })
                this.cloneCanvas(presetCopy, "canvasCopy");
                if (values.channelR !== 0 || values.channelG !== 0 || values.channelB !== 0) this.channels({ red: values.channelR, green: values.channelG, blue: values.channelB });
                if (values.saturation !== 0) this.saturation(values.saturation);
                if (values.vibrance !== 0) this.vibrance(values.vibrance);
                if (values.sepia !== 0) this.sepia(values.sepia);
                if (values.clip !== 0) this.clip(values.clip);
                if (values.noise !== 0) this.noise(values.noise);
                if (values.contrast !== 0) this.contrast(values.contrast);
                if (values.exposure !== 0) this.exposure(values.exposure);
                if (values.gamma !== 1) this.gamma(values.gamma);
                if (values.hue !== 0) this.hue(values.hue);
                if (values.greyscale) this.greyscale();
                if (values.colorizeStrength !== 0) this.colorize(endColor, values.colorizeStrength);
                if (values.sharpen !== 0) this.sharpen(values.sharpen);
                if (values.dither) this.dither(ditherAlgorithms[values.ditherAlgo]);
                if (values.invert) this.invert();
                if (values.brightness !== 0) this.brightness(values.brightness);
                if (values.motionBlurLayers !== 0) this.compoundMotionBlur(values.motionBlurLayers, values.motionBlurAngle);
                if (values.radialBlur !== 0) this.compoundRadialBlur(values.radialBlur);
                if (values.stackBlur !== 0) this.stackBlur(values.stackBlur);
                this.render(function () {
                    cropCanvas();
                });
            });
        }
    }

    function cropCanvas() {
        if (currentCrop.width && currentCrop.height) {
            canvasCopy = document.getElementById("canvasCopy");
            window.Caman("#canvas", img, function () {
                if (values.mirrorX === 1 || values.mirrorY === 1) {
                    this.cloneCanvas(canvasCopy, "canvas")
                        //.resize((currentCrop.width / 100) * this.canvas.width > (currentCrop.height / 100) * this.canvas.height ? { width: 500 } : { height: 500 })
                        .opacity(values.opacity)
                        .crop(currentCrop.width, currentCrop.height, currentCrop.x, currentCrop.y)
                        .mirror(values.mirrorX, values.mirrorY)
                        .resizePercent({ width: values.resizeWidth, height: values.resizeHeight })
                        .rotate(values.rotateAngle)

                    if (values.vignetteSize !== 0 && values.vignetteStrength !== 0) this.vignette(values.vignetteSize + '%', values.vignetteStrength);
                    this.render(function () {
                        if ((activeTransformContainer === 0 || activeTransformContainer === 1) && document.getElementById('canvas')) document.getElementById('canvas').classList.add('invisible');
                        setPreviousPreset(values.presetFilter);
                        setIsRendering(false);
                    });
                }
                else {
                    this.cloneCanvas(canvasCopy, "canvas")
                        .resize((currentCrop.width / 100) * this.canvas.width > (currentCrop.height / 100) * this.canvas.height ? { width: 500 } : { height: 500 })
                        .opacity(values.opacity)
                        .crop(currentCrop.width, currentCrop.height, currentCrop.x, currentCrop.y)
                        .resizePercent({ width: values.resizeWidth, height: values.resizeHeight })
                        .rotate(values.rotateAngle)
                    if (values.vignetteSize !== 0 && values.vignetteStrength !== 0) this.vignette(values.vignetteSize + '%', values.vignetteStrength);
                    this.render(function () {
                        if ((activeTransformContainer === 0 || activeTransformContainer === 1) && document.getElementById('canvas')) document.getElementById('canvas').classList.add('invisible');
                        setPreviousPreset(values.presetFilter);
                        setIsRendering(false);
                    });
                }
            });
        }
    }

    useEffect(() => {
        var c = document.getElementById('canvas');
        if (c) {
            if (activeTransformContainer === 0 || activeTransformContainer === 1) {
                c.classList.add('invisible');
            }
            else {
                c.classList.remove('invisible');
            }
        }
    }, [activeTransformContainer])

    useEffect(() => {
        setCurrentRotate(values.rotateAngle);
    }, [values.rotateAngle]);
    useEffect(() => {
        setCurrentWidth(values.resizeWidth);
    }, [values.resizeWidth]);
    useEffect(() => {
        setCurrentHeight(values.resizeHeight);
    }, [values.resizeHeight]);
    useEffect(() => {
        setValues((prevState) => ({
            ...prevState,
            presetFilter: currentPreset
        }))
    }, [currentPreset]);
    useEffect(() => {
        setCurrentOpacity(values.opacity);
    }, [values.opacity]);
    useEffect(() => {
        setCurrentVignetteSize(values.vignetteSize);
        setCurrentVignetteStrength(values.vignetteStrength);
    }, [values.vignetteSize, values.vignetteStrength]);

    function cloneAttributes(sourceNode, element) {
        let attr;
        let attributes = Array.prototype.slice.call(sourceNode.attributes);
        //eslint-disable-next-line
        while (attr = attributes.pop()) {
            element.setAttribute(attr.nodeName, attr.nodeValue);
        }
    }

    // Download
    function download(canvas, filename) {
        // Init event
        let e;
        // Create link
        const link = document.createElement("a");

        // Set props
        link.download = filename;
        link.href = canvas.toDataURL("image/" + (isPNG ? 'png' : 'jpeg'), imageQuality);
        // New mouse event
        e = new MouseEvent("click");
        // Dispatch event
        link.dispatchEvent(e);
    }

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        console.log(e.target.files[0]);
        setValues({ ...resetValues });
        setRenderPaused(false);
        if (file && file.type.match('image.*')) {
            setFileName(file.name);
            previewFile(file);
            setFileInputState(e.target.value);
        }
        else {
            setFileInputState('');
            setPreviewSource('');
        }
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        canvas = document.getElementById("canvas");
        presetCopy = document.getElementById("presetCopy");
        canvasCopy = document.getElementById("canvasCopy");
        ctxPreset = presetCopy.getContext("2d");
        ctxCopy = canvasCopy.getContext("2d");
        reader.onloadend = () => {
            setPreviewSource(reader.result);
            window.Caman("#canvasCopy", img, function () {
                this.reloadCanvasData();
            });
            window.Caman("#presetCopy", img, function () {
                this.reloadCanvasData();
                // Create image
                img = new Image();
                // Set image src
                img.src = reader.result;
                // On image load add to canvas
                img.onload = function () {
                    presetCopy.width = img.width;
                    presetCopy.height = img.height;
                    ctxPreset.drawImage(img, 0, 0, img.width, img.height);
                    presetCopy.removeAttribute("data-caman-id");

                    canvasCopy.width = img.width;
                    canvasCopy.height = img.height;
                    ctxCopy.drawImage(img, 0, 0, img.width, img.height);
                    canvasCopy.removeAttribute("data-caman-id");
                    resizeCanvas();
                };
                /*
                window.Caman.Event.listen("processStart", function (job) {
                });
                window.Caman.Event.listen("processComplete", function (job) {
                    //console.log("Finished:", job.name);
                });
                window.Caman.Event.listen("renderFinished", function () {
                    //console.log("Finished Rendering");
                });
                */
            });
        }
    }

    const postFile = (e) => {
        console.log('submitting');
        e.preventDefault();
        if (!previewSource) return;
        canvas = document.getElementById("canvas");
        if (postOriginal) postImage(previewSource);
        else if (canvas) {
            var editedImage = canvas.toDataURL("image/" + (isPNG ? 'png' : 'jpeg'), imageQuality);
            postImage(editedImage);
        }
    }

    const postImage = (base64EncodedImage) => {
        var tempDescription = description;
        var tempPostView = postView;
        setFileInputState('');
        setPreviewSource('');
        setDescription('');
        setPostView('Public');
        setIsLoading(true);
        if (document.getElementById('fileUploadForm')) document.getElementById('fileUploadForm').reset();
        Axios.post(url + '/image/upload/post', {
            data: base64EncodedImage,
            userID: currentUser.id,
            description: tempDescription,
            view: tempPostView
        }).then((response) => {
            props.history.push('/posts/' + response.data[0].id);
            setIsLoading(false);
        })
    }

    return (
        <div>
            <div className="blog-header small-header">
                <div className="container btrans small-btrans">
                    <h1 className="text-center"><strong>Foto Editor</strong></h1>
                </div>
            </div>

            <div className="container">

                <div className="row">

                    <div className="col-sm-12 blog-main">

                        <div className="blog-post">
                            <Form acceptCharset="UTF-8" onSubmit={(e) => { e.preventDefault(); }} id="fileUploadForm">
                                <Form.Group>
                                    <Form.File accept="image/x-png,image/gif,image/jpeg" value={fileInputState} onChange={handleFileInputChange} className="fileUpload" id="fileUploadID" name="image" label="Upload photo" />
                                </Form.Group>

                                <div className="row">
                                    <div className="activeFilterContainer autoLeftBorder">

                                        <div className={"buttonCoupleContainer align-self-center" + (activeTransformContainer === 0 ? '' : ' display-none')}>
                                            <p>Original Image</p>
                                        </div>

                                        <div className={"buttonCoupleContainer align-self-center" + (activeTransformContainer === 1 ? '' : ' display-none')}>
                                            <p>Select Crop Area</p>
                                        </div>

                                        <div className={"sliderCoupleContainer" + (activeTransformContainer === 2 ? '' : ' display-none')}>
                                            <div className="sliderCouple">
                                                <div className="sliderFlexWrap">

                                                    <RangeSlider
                                                        value={currentRotate}
                                                        onChange={(e) => { setCurrentRotate(e.target.value) }}
                                                        onAfterChange={
                                                            (e) => {
                                                                setValues((prevState) => ({
                                                                    ...prevState,
                                                                    rotateAngle: parseInt(e.target.value)
                                                                }))
                                                            }
                                                        }
                                                        min={-180}
                                                        max={180}
                                                        step={1}
                                                        className="rotateRange"
                                                        variant="light"
                                                        tooltipLabel={currentValue => `${currentValue}°`}
                                                        tooltipPlacement='top'
                                                        tooltip='on'
                                                    />
                                                </div>
                                                <div id="rotate-add" onClick={() => {
                                                    setCurrentRotate(values.rotateAngle < 180 ? values.rotateAngle + 1 : -180);
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        rotateAngle: prevState.rotateAngle < 180 ? prevState.rotateAngle + 1 : -180
                                                    }))
                                                }} className="valueButton">
                                                    +
                                                </div>
                                                <div id="rotate-clockwise" onClick={() => {
                                                    setCurrentRotate(values.rotateAngle === 0 ? 90 : values.rotateAngle === 90 ? 180 : (values.rotateAngle === 180 || values.rotateAngle === -180) ? -90 : 0);
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        rotateAngle: prevState.rotateAngle === 0 ? 90 : prevState.rotateAngle === 90 ? -180 : (prevState.rotateAngle === 180 || prevState.rotateAngle === -180) ? -90 : 0
                                                    }))
                                                }} className="valueButton">
                                                    {(values.rotateAngle === 0 || values.rotateAngle === 90 || values.rotateAngle === 180 || values.rotateAngle === -180 || values.rotateAngle === -90) ?
                                                        <BootstrapIcon type={40} />
                                                        : <BootstrapIcon type={39} />
                                                    }
                                                </div>
                                                <div id="rotate-remove" onClick={() => {
                                                    setCurrentRotate(values.rotateAngle > -180 ? values.rotateAngle - 1 : 180);
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        rotateAngle: prevState.rotateAngle > -180 ? prevState.rotateAngle - 1 : 180
                                                    }))
                                                }} className="valueButton">
                                                    -
                                                    </div>
                                            </div>
                                        </div>

                                        <div className={"sliderCoupleContainer" + (activeTransformContainer === 3 ? '' : ' display-none')}>
                                            <div className="sliderCouple">
                                                <div id="resizeWidth-add" onClick={() => {
                                                    setCurrentWidth(values.resizeWidth < 99 ? values.resizeWidth + 1 : 100);
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        resizeWidth: prevState.resizeWidth < 99 ? prevState.resizeWidth + 1 : 100
                                                    }))
                                                }} className="valueButton">
                                                    +
                                                </div>
                                                <div id="resizeWidth-Original" onClick={() => {
                                                    setCurrentWidth(100);
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        resizeWidth: 100
                                                    }))
                                                }} className="valueButton">
                                                    <BootstrapIcon type={42} />
                                                </div>
                                                <div id="resizeWidth-remove" onClick={() => {
                                                    setCurrentWidth(values.resizeWidth > 6 ? values.resizeWidth - 1 : 5);
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        resizeWidth: prevState.resizeWidth > 6 ? prevState.resizeWidth - 1 : 5
                                                    }))
                                                }} className="valueButton">
                                                    -
                                                    </div>
                                                <div className="sliderFlexWrap Aspect">

                                                    <RangeSlider
                                                        value={currentWidth}
                                                        onChange={(e) => { setCurrentWidth(e.target.value) }}
                                                        onAfterChange={
                                                            (e) => {
                                                                setValues((prevState) => ({
                                                                    ...prevState,
                                                                    resizeWidth: parseInt(e.target.value)
                                                                }))
                                                            }
                                                        }
                                                        min={5}
                                                        max={100}
                                                        step={1}
                                                        className="resizeRange"
                                                        variant="light"
                                                        tooltipLabel={currentValue => `${currentValue}%`}
                                                        tooltipPlacement='top'
                                                        tooltip='auto'
                                                    />
                                                </div>

                                                <div className="sliderFlexWrap Aspect">

                                                    <RangeSlider
                                                        value={currentHeight}
                                                        onChange={(e) => { setCurrentHeight(e.target.value) }}
                                                        onAfterChange={
                                                            (e) => {
                                                                setValues((prevState) => ({
                                                                    ...prevState,
                                                                    resizeHeight: parseInt(e.target.value)
                                                                }))
                                                            }
                                                        }
                                                        min={5}
                                                        max={100}
                                                        step={1}
                                                        className="resizeRange"
                                                        variant="light"
                                                        tooltipLabel={currentValue => `${currentValue}%`}
                                                        tooltipPlacement='bottom'
                                                        tooltip='auto'
                                                    />
                                                </div>
                                                <div id="resizeHeight-add" onClick={() => {
                                                    setCurrentHeight(values.resizeHeight < 99 ? values.resizeHeight + 1 : 100);
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        resizeHeight: prevState.resizeHeight < 99 ? prevState.resizeHeight + 1 : 100
                                                    }))
                                                }} className="valueButton">
                                                    +
                                                </div>
                                                <div id="resizeHeight-Original" onClick={() => {
                                                    setCurrentHeight(100);
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        resizeHeight: 100
                                                    }))
                                                }} className="valueButton">
                                                    <BootstrapIcon type={43} />
                                                </div>
                                                <div id="resizeHeight-remove" onClick={() => {
                                                    setCurrentHeight(values.resizeHeight > 6 ? values.resizeHeight - 1 : 5);
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        resizeHeight: prevState.resizeHeight > 6 ? prevState.resizeHeight - 1 : 5
                                                    }))
                                                }} className="valueButton">
                                                    -
                                                    </div>

                                            </div>
                                        </div>

                                        <div className={"sliderCoupleContainer" + (activeTransformContainer === 4 ? '' : ' display-none')}>
                                            <p>Mirror</p>
                                            <div className="sliderCouple">
                                                <div id="mirrorY" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        mirrorY: prevState.mirrorY === 0 ? 1 : 0
                                                    }))
                                                }} className={"valueButton" + (values.mirrorY === 1 ? ' activeButton' : '')}>
                                                    <BootstrapIcon type={45} />
                                                </div>
                                                <div id="mirrorX" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        mirrorX: prevState.mirrorX === 0 ? 1 : 0
                                                    }))
                                                }} className={"valueButton" + (values.mirrorX === 1 ? ' activeButton' : '')}>
                                                    <BootstrapIcon type={44} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={"sliderCoupleContainer" + (activeTransformContainer === 5 ? '' : ' display-none')}>
                                            <div className="sliderCouple">
                                                <div id="opacity-add" onClick={() => {
                                                    setCurrentOpacity(values.opacity < 0.95 ? values.opacity + 0.05 : 1);
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        opacity: prevState.opacity < 0.95 ? prevState.opacity + 0.05 : 1
                                                    }))
                                                }} className="valueButton">
                                                    +
                                                </div>
                                                <p>Opacity</p>
                                                <div id="opacity-remove" onClick={() => {
                                                    setCurrentOpacity(values.opacity > 0.05 ? values.opacity - 0.05 : 0);
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        opacity: prevState.opacity > 0.05 ? prevState.opacity - 0.05 : 0
                                                    }))
                                                }} className="valueButton">
                                                    -
                                                    </div>
                                                <div className="sliderFlexWrap Aspect">

                                                    <RangeSlider
                                                        value={currentOpacity}
                                                        onChange={(e) => { setCurrentOpacity(e.target.value) }}
                                                        onAfterChange={
                                                            (e) => {
                                                                setValues((prevState) => ({
                                                                    ...prevState,
                                                                    opacity: parseFloat(e.target.value)
                                                                }))
                                                            }
                                                        }
                                                        min={0}
                                                        max={1}
                                                        step={0.05}
                                                        className="rotateRange"
                                                        variant="light"
                                                        tooltipLabel={currentValue => `${Math.round(currentValue * 100)}%`}
                                                        tooltipPlacement='top'
                                                        tooltip='auto'
                                                    />
                                                </div>
                                                <div className="imageTypeCoupleContainer">
                                                    <div className="imageTypeCouple">
                                                        <div id="imagePNG" onClick={() => { setIsPNG(true); }} className={"imageTypeButton" + (isPNG ? ' activeButton' : '')}>
                                                            PNG
                                                    </div>
                                                        <div id="imageJPG" onClick={() => { setIsPNG(false); }} className={"imageTypeButton" + (!isPNG ? ' activeButton' : '')}>
                                                            JPG
                                                    </div>
                                                    </div>

                                                    <p>Image Type</p>
                                                </div>
                                                <div className="imageTypeCoupleContainer">
                                                    <div className="imageTypeCouple">

                                                        <div id="imageOrigin" onClick={() => { setPostOriginal(true); }} className={"imageTypeButton" + (postOriginal ? ' activeButton' : '')}>
                                                            Original
                                                    </div>
                                                        <div id="imageEdit" onClick={() => { setPostOriginal(false); }} className={"imageTypeButton" + (!postOriginal ? ' activeButton' : '')}>
                                                            Edited
                                                    </div>
                                                    </div>

                                                    <p>Post Image</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 editorContaier">
                                        <div className="buttonRow">
                                            <div id="toggle-original" onClick={() => { setActiveTransformContainer(activeTransformContainer === 0 ? -1 : 0) }} className={"editorButton" + (activeTransformContainer === 0 ? ' activeButton' : '')}><BootstrapIcon type={22} /></div>
                                            <div id="crop" onClick={() => { setActiveTransformContainer(activeTransformContainer === 1 ? -1 : 1) }} className={"editorButton" + (activeTransformContainer === 1 ? ' activeButton' : '')}><BootstrapIcon type={35} /></div>
                                            <div id="rotate" onClick={() => { setActiveTransformContainer(activeTransformContainer === 2 ? -1 : 2) }} className={"editorButton" + (activeTransformContainer === 2 ? ' activeButton' : '')}><BootstrapIcon type={38} /></div>
                                            <div id="resize" onClick={() => { setActiveTransformContainer(activeTransformContainer === 3 ? -1 : 3) }} className={"editorButton" + (activeTransformContainer === 3 ? ' activeButton' : '')}><BootstrapIcon type={41} /></div>
                                            <div id="mirror" onClick={() => { setActiveTransformContainer(activeTransformContainer === 4 ? -1 : 4) }} className={"editorButton" + (activeTransformContainer === 4 ? ' activeButton' : '')}><BootstrapIcon type={44} /></div>
                                            <div id="imageSettings" onClick={() => { setActiveTransformContainer(activeTransformContainer === 5 ? -1 : 5) }} className={"editorButton" + (activeTransformContainer === 5 ? ' activeButton' : '')}><BootstrapIcon type={51} /></div>
                                            <div id="render" className={"editorButton" + (!renderPaused ? ' activeButton' : '')} onClick={() => { setRenderPaused(!renderPaused) }}><BootstrapIcon type={!renderPaused ? 56 : 57} /></div>
                                            <div id="download" className="editorButton" onClick={
                                                () => {
                                                    // Get ext
                                                    const fileExtension = fileName.slice(-4);

                                                    // Init new filename
                                                    let newFilename;

                                                    // Check image type
                                                    if (fileExtension === ".jpg" || fileExtension === ".png" || fileExtension === ".gif") {
                                                        // new filename
                                                        newFilename = fileName.substring(0, fileName.length - 4) + "-edited." + (isPNG ? 'png' : 'jpg');
                                                        console.log(isPNG ? 'PNG' : 'JPG');
                                                        console.log(newFilename);
                                                    }

                                                    // Call download
                                                    canvas = document.getElementById('canvas');
                                                    download(canvas, newFilename);
                                                }
                                            }><BootstrapIcon type={54} /></div>
                                            <div id="reset" className="editorButton" onClick={() => { setPreviousPreset('initial'); setCurrentPreset(''); setCurrentCrop({ ...cropReset }); setValues({ ...resetValues }); setRenderPaused(false); }}><BootstrapIcon type={55} /></div>
                                        </div>
                                        <div className={"originalImageContainer"}>
                                            <canvas data-caman-hidpi-disabled="true" id="presetCopy"></canvas>
                                            <img src={previewSource ? previewSource : ''} alt="selected file" className={"originalImage" + (activeTransformContainer === 0 ? '' : ' invisible')} />
                                            <canvas data-caman-hidpi-disabled="true" id="canvasCopy"></canvas>
                                            <ReactCrop className={(activeTransformContainer === 1) ? '' : 'invisible'} src={previewSource} crop={currentCrop} onChange={(crop, percentCrop) => { setCurrentCrop(percentCrop) }} onComplete={cropCanvas} />
                                            <canvas data-caman-hidpi-disabled="true" className={"blackCover " + ((activeTransformContainer !== 1) ? '' : 'invisible')}></canvas>
                                            <canvas id="canvas" data-caman-hidpi-disabled="true" className={(activeTransformContainer !== 0 && activeTransformContainer !== 1) ? '' : 'invisible'}></canvas>
                                        </div>
                                        <div className="buttonRow">
                                            <div className={"editorButton" + (activeFilterContainer === 0 ? ' activeButton' : '')} onClick={() => { setActiveFilterContainer(activeFilterContainer === 0 ? -1 : 0) }}><BootstrapIcon type={50} /></div>
                                            <div className={"editorButton" + (activeFilterContainer === 1 ? ' activeButton' : '')} onClick={() => { setActiveFilterContainer(activeFilterContainer === 1 ? -1 : 1) }}><BootstrapIcon type={37} /></div>
                                            <div className={"editorButton" + (activeFilterContainer === 2 ? ' activeButton' : '')} onClick={() => { setActiveFilterContainer(activeFilterContainer === 2 ? -1 : 2) }}><BootstrapIcon type={46} /></div>
                                            <div className={"editorButton" + (activeFilterContainer === 3 ? ' activeButton' : '')} onClick={() => { setActiveFilterContainer(activeFilterContainer === 3 ? -1 : 3) }}><BootstrapIcon type={47} /></div>
                                            <div className={"editorButton" + (activeFilterContainer === 4 ? ' activeButton' : '')} onClick={() => { setActiveFilterContainer(activeFilterContainer === 4 ? -1 : 4) }}><BootstrapIcon type={48} /></div>
                                            <div className={"editorButton" + (activeFilterContainer === 5 ? ' activeButton' : '')} onClick={() => { setActiveFilterContainer(activeFilterContainer === 5 ? -1 : 5) }}><BootstrapIcon type={49} /></div>
                                            <div className={"editorButton" + (activeFilterContainer === 6 ? ' activeButton' : '')} onClick={() => { setActiveFilterContainer(activeFilterContainer === 6 ? -1 : 6) }}><BootstrapIcon type={72} /></div>
                                            <div className="editorButton" onClick={() => { }}><BootstrapIcon type={52} /></div>
                                            <div className="editorButton" onClick={() => { }}><BootstrapIcon type={53} /></div>
                                        </div>

                                    </div>
                                    <div className="activeFilterContainer">
                                        <div className="renderStatusContainer">
                                            {isRendering ?
                                                <div className="lds-spinner-small"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                                : null
                                            }
                                        </div>
                                        <div className={"buttonCoupleContainer presetContainer" + (activeFilterContainer === 0 ? '' : ' display-none')}>
                                            <div className={"presetButton " + ((values.presetFilter === '') ? 'activePreset' : '')} onClick={() => { setCurrentPreset('') }}>
                                                <img src={TEMPLATE} alt='preset' className="presetTemplate" />
                                                <p>None</p>
                                            </div>
                                            <div className={"presetButton " + ((values.presetFilter === 'vintage') ? 'activePreset' : '')} onClick={() => { setCurrentPreset(currentPreset === 'vintage' ? '' : 'vintage') }}>
                                                <img src={VINTAGE} alt='preset' className="presetTemplate" />
                                                <p>Vintage</p>
                                            </div>
                                            <div className={"presetButton " + ((values.presetFilter === 'lomo') ? 'activePreset' : '')} onClick={() => { setCurrentPreset(currentPreset === 'lomo' ? '' : 'lomo') }}>
                                                <img src={LOMO} alt='preset' className="presetTemplate" />
                                                <p>Lomo</p>
                                            </div>
                                            <div className={"presetButton " + ((values.presetFilter === 'clarity') ? 'activePreset' : '')} onClick={() => { setCurrentPreset(currentPreset === 'clarity' ? '' : 'clarity') }}>
                                                <img src={CLARITY} alt='preset' className="presetTemplate" />
                                                <p>Clarity</p>
                                            </div>
                                            <div className={"presetButton " + ((values.presetFilter === 'sinCity') ? 'activePreset' : '')} onClick={() => { setCurrentPreset(currentPreset === 'sinCity' ? '' : 'sinCity') }}>
                                                <img src={SINCITY} alt='preset' className="presetTemplate" />
                                                <p>Sin City</p>
                                            </div>
                                            <div className={"presetButton " + ((values.presetFilter === 'sunrise') ? 'activePreset' : '')} onClick={() => { setCurrentPreset(currentPreset === 'sunrise' ? '' : 'sunrise') }}>
                                                <img src={SUNRISE} alt='preset' className="presetTemplate" />
                                                <p>Sunrise</p>
                                            </div>
                                            <div className={"presetButton " + ((values.presetFilter === 'crossProcess') ? 'activePreset' : '')} onClick={() => { setCurrentPreset(currentPreset === 'crossProcess' ? '' : 'crossProcess') }}>
                                                <img src={CROSSPROCESS} alt='preset' className="presetTemplate" />
                                                <p>Process</p>
                                            </div>
                                            <div className={"presetButton " + ((values.presetFilter === 'orangePeel') ? 'activePreset' : '')} onClick={() => { setCurrentPreset(currentPreset === 'orangePeel' ? '' : 'orangePeel') }}>
                                                <img src={ORANGEPEEL} alt='preset' className="presetTemplate" />
                                                <p>RedPeel</p>
                                            </div>
                                            <div className={"presetButton " + ((values.presetFilter === 'love') ? 'activePreset' : '')} onClick={() => { setCurrentPreset(currentPreset === 'love' ? '' : 'love') }}>
                                                <img src={LOVE} alt='preset' className="presetTemplate" />
                                                <p>Love</p>
                                            </div>
                                            <div className={"presetButton " + ((values.presetFilter === 'grungy') ? 'activePreset' : '')} onClick={() => { setCurrentPreset(currentPreset === 'grungy' ? '' : 'grungy') }}>
                                                <img src={GRUNGY} alt='preset' className="presetTemplate" />
                                                <p>Grungy</p>
                                            </div>
                                            <div className={"presetButton " + ((values.presetFilter === 'jarques') ? 'activePreset' : '')} onClick={() => { setCurrentPreset(currentPreset === 'jarques' ? '' : 'jarques') }}>
                                                <img src={JARQUES} alt='preset' className="presetTemplate" />
                                                <p>Jarques</p>
                                            </div>
                                            <div className={"presetButton " + ((values.presetFilter === 'pinhole') ? 'activePreset' : '')} onClick={() => { setCurrentPreset(currentPreset === 'pinhole' ? '' : 'pinhole') }}>
                                                <img src={PINHOLE} alt='preset' className="presetTemplate" />
                                                <p>Pinhole</p>
                                            </div>
                                            <div className={"presetButton " + ((values.presetFilter === 'oldBoot') ? 'activePreset' : '')} onClick={() => { setCurrentPreset(currentPreset === 'oldBoot' ? '' : 'oldBoot') }}>
                                                <img src={OLDBOOT} alt='preset' className="presetTemplate" />
                                                <p>OldBoot</p>
                                            </div>
                                            <div className={"presetButton " + ((values.presetFilter === 'glowingSun') ? 'activePreset' : '')} onClick={() => { setCurrentPreset(currentPreset === 'glowingSun' ? '' : 'glowingSun') }}>
                                                <img src={GLOWINGSUN} alt='preset' className="presetTemplate" />
                                                <p>Glow</p>
                                            </div>
                                            <div className={"presetButton " + ((values.presetFilter === 'hazyDays') ? 'activePreset' : '')} onClick={() => { setCurrentPreset(currentPreset === 'hazyDays' ? '' : 'hazyDays') }}>
                                                <img src={HAZYDAYS} alt='preset' className="presetTemplate" />
                                                <p>HazyDays</p>
                                            </div>
                                            <div className={"presetButton " + ((values.presetFilter === 'herMajesty') ? 'activePreset' : '')} onClick={() => { setCurrentPreset(currentPreset === 'herMajesty' ? '' : 'herMajesty') }}>
                                                <img src={HERMAJESTY} alt='preset' className="presetTemplate" />
                                                <p>Majestic</p>
                                            </div>
                                            <div className={"presetButton " + ((values.presetFilter === 'nostalgia') ? 'activePreset' : '')} onClick={() => { setCurrentPreset(currentPreset === 'nostalgia' ? '' : 'nostalgia') }}>
                                                <img src={NOSTALGIA} alt='preset' className="presetTemplate" />
                                                <p>Nostalgia</p>
                                            </div>
                                            <div className={"presetButton " + ((values.presetFilter === 'hemingway') ? 'activePreset' : '')} onClick={() => { setCurrentPreset(currentPreset === 'hemingway' ? '' : 'hemingway') }}>
                                                <img src={HEMINGWAY} alt='preset' className="presetTemplate" />
                                                <p>Bliss</p>
                                            </div>
                                            <div className={"presetButton " + ((values.presetFilter === 'concentrate') ? 'activePreset' : '')} onClick={() => { setCurrentPreset(currentPreset === 'concentrate' ? '' : 'concentrate') }}>
                                                <img src={CONCENTRATE} alt='preset' className="presetTemplate" />
                                                <p>Focus</p>
                                            </div>
                                        </div>

                                        <div className={"buttonCoupleContainer" + (activeFilterContainer === 1 ? '' : ' display-none')}>
                                            <div className="buttonCouple">
                                                <BootstrapIcon type={23} />
                                                <div id="brightness-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        brightness: (prevState.brightness < 95) ? (prevState.brightness + 5) : 100
                                                    }))
                                                }}>+</div>
                                                <div id="brightness-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        brightness: (prevState.brightness > -95) ? (prevState.brightness - 5) : -100
                                                    }))
                                                }}>-</div>
                                            </div>
                                            <div className="buttonCouple">
                                                <BootstrapIcon type={24} />
                                                <div id="contrast-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        contrast: (prevState.contrast < 95) ? (prevState.contrast + 5) : 100
                                                    }))
                                                }}>+</div>
                                                <div id="contrast-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        contrast: (prevState.contrast > -95) ? (prevState.contrast - 5) : -100
                                                    }))
                                                }}>-</div>
                                            </div>
                                            <div className="buttonCouple">
                                                <BootstrapIcon type={25} />
                                                <div id="exposure-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        exposure: (prevState.exposure < 95) ? (prevState.exposure + 5) : 100
                                                    }))
                                                }}>+</div>
                                                <div id="exposure-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        exposure: (prevState.exposure > -95) ? (prevState.exposure - 5) : -100
                                                    }))
                                                }}>-</div>
                                            </div>
                                            <div className="buttonCouple">
                                                <BootstrapIcon type={36} />
                                                <div id="gamma-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        gamma: (prevState.gamma < 3.9) ? (prevState.gamma + 0.1) : 4
                                                    }))
                                                }}>+</div>
                                                <div id="gamma-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        gamma: (prevState.gamma > 0.1) ? (prevState.gamma - 0.1) : 0
                                                    }))
                                                }}>-</div>
                                            </div>
                                            <div className="buttonCouple">
                                                <BootstrapIcon type={32} />
                                                <div id="stackBlur-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        stackBlur: (prevState.stackBlur < 7) ? (prevState.stackBlur + 1) : 8
                                                    }))
                                                }}>+</div>
                                                <div id="stackBlur-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        stackBlur: (prevState.stackBlur > 1) ? (prevState.stackBlur - 1) : 0
                                                    }))
                                                }}>-</div>
                                            </div>
                                            <div className="buttonCouple">
                                                <BootstrapIcon type={58} />
                                                <div id="radialBlur-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        radialBlur: (prevState.radialBlur < 2) ? (prevState.radialBlur + 1) : 3
                                                    }))
                                                }}>+</div>
                                                <div id="radialBlur-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        radialBlur: (prevState.radialBlur > 1) ? (prevState.radialBlur - 1) : 0
                                                    }))
                                                }}>-</div>
                                            </div>
                                        </div>

                                        <div className={"buttonCoupleContainer" + (activeFilterContainer === 2 ? '' : ' display-none')}>
                                            <div className="buttonCouple">
                                                <BootstrapIcon type={26} />
                                                <div id="saturation-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        saturation: (prevState.saturation < 95) ? (prevState.saturation + 5) : 100
                                                    }))
                                                }}>+</div>
                                                <div id="saturation-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        saturation: (prevState.saturation > -95) ? (prevState.saturation - 5) : -100
                                                    }))
                                                }}>-</div>
                                            </div>
                                            <div className="buttonCouple">
                                                <BootstrapIcon type={27} />
                                                <div id="vibrance-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        vibrance: (prevState.vibrance < 95) ? (prevState.vibrance + 5) : 100
                                                    }))
                                                }}>+</div>
                                                <div id="vibrance-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        vibrance: (prevState.vibrance > -95) ? (prevState.vibrance - 5) : -100
                                                    }))
                                                }}>-</div>
                                            </div>
                                            <div className="buttonCouple">
                                                <BootstrapIcon type={34} />
                                                <div id="hue-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        hue: (prevState.hue < 95) ? (prevState.hue + 5) : 100
                                                    }))
                                                }}>+</div>
                                                <div id="hue-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        hue: (prevState.hue > 5) ? (prevState.hue - 5) : 0
                                                    }))
                                                }}>-</div>
                                            </div>
                                            <div className="buttonCouple">
                                                <BootstrapIcon type={59} />
                                                <div id="invert-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        invert: true
                                                    }))
                                                }}><BootstrapIcon type={30} /></div>
                                                <div id="invert-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        invert: false
                                                    }))
                                                }}><BootstrapIcon type={31} /></div>
                                            </div>
                                            <div className="buttonCouple">
                                                <BootstrapIcon type={60} />
                                                <div id="sepia-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        sepia: (prevState.sepia < 95) ? (prevState.sepia + 5) : 100
                                                    }))
                                                }}>+</div>
                                                <div id="sepia-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        sepia: (prevState.sepia > 5) ? (prevState.sepia - 5) : 0
                                                    }))
                                                }}>-</div>
                                            </div>
                                            <div className="buttonCouple">
                                                <BootstrapIcon type={33} />
                                                <div id="clip-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        clip: (prevState.clip < 95) ? (prevState.clip + 5) : 100
                                                    }))
                                                }}>+</div>
                                                <div id="clip-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        clip: (prevState.clip > 5) ? (prevState.clip - 5) : 0
                                                    }))
                                                }}>-</div>
                                            </div>
                                        </div>

                                        <div className={"buttonCoupleContainer" + (activeFilterContainer === 3 ? '' : ' display-none')}>
                                            <div className="buttonCouple">
                                                <BootstrapIcon type={29} fill='red' />
                                                <div id="channelR-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        channelR: (prevState.channelR < 95) ? (prevState.channelR + 5) : 100
                                                    }))
                                                }}>+</div>
                                                <div id="channelR-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        channelR: (prevState.channelR > -95) ? (prevState.channelR - 5) : -100
                                                    }))
                                                }}>-</div>
                                            </div>
                                            <div className="buttonCouple">
                                                <BootstrapIcon type={29} fill='green' />
                                                <div id="channelG-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        channelG: (prevState.channelG < 95) ? (prevState.channelG + 5) : 100
                                                    }))
                                                }}>+</div>
                                                <div id="channelG-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        channelG: (prevState.channelG > -95) ? (prevState.channelG - 5) : -100
                                                    }))
                                                }}>-</div>
                                            </div>
                                            <div className="buttonCouple">
                                                <BootstrapIcon type={29} fill='blue' />
                                                <div id="channelB-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        channelB: (prevState.channelB < 95) ? (prevState.channelB + 5) : 100
                                                    }))
                                                }}>+</div>
                                                <div id="channelB-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        channelB: (prevState.channelB > -95) ? (prevState.channelB - 5) : -100
                                                    }))
                                                }}>-</div>
                                            </div>
                                            <div className="buttonCouple">
                                                <BootstrapIcon type={29} fill='grey' />
                                                <div id="greyscale-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        greyscale: true
                                                    }))
                                                }}><BootstrapIcon type={30} /></div>
                                                <div id="greyscale-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        greyscale: false
                                                    }))
                                                }}><BootstrapIcon type={31} /></div>
                                            </div>
                                        </div>

                                        <div className={"sliderCoupleContainer" + (activeFilterContainer === 4 ? '' : ' display-none')}>
                                            <div className="sliderCouple">
                                                <div className="sliderFlexWrap">
                                                    <SliderPicker color={currentColor} onChange={(color) => { setCurrentColor(color.hex) }} onChangeComplete={(color) => { setEndColor(color.hex) }} />
                                                </div>
                                                <div id="colorizeStrength-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        colorizeStrength: (prevState.colorizeStrength < 95) ? (prevState.colorizeStrength + 5) : 100
                                                    }))
                                                }}>+</div>
                                                <div id="colorizeStrength-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        colorizeStrength: (prevState.colorizeStrength > 5) ? (prevState.colorizeStrength - 5) : 0
                                                    }))
                                                }}>-</div>
                                            </div>
                                        </div>

                                        <div className={"buttonCoupleContainer" + (activeFilterContainer === 5 ? '' : ' display-none')}>
                                            <div className="buttonCouple">
                                                <BootstrapIcon type={61} />
                                                <div id="noise-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        noise: (prevState.noise < 75) ? (prevState.noise + 5) : 80
                                                    }))
                                                }}>+</div>
                                                <div id="noise-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        noise: (prevState.noise > 5) ? (prevState.noise - 5) : 0
                                                    }))
                                                }}>-</div>
                                            </div>
                                            <div className="buttonCouple">
                                                <BootstrapIcon type={68} />
                                                <div id="sharpen-add" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        sharpen: (prevState.sharpen < 55) ? (prevState.sharpen + 5) : 60
                                                    }))
                                                }}>+</div>
                                                <div id="sharpen-remove" className="valueButton" onClick={() => {
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        sharpen: (prevState.sharpen > 5) ? (prevState.sharpen - 5) : 0
                                                    }))
                                                }}>-</div>
                                            </div>
                                            <div className="buttonCouple">
                                                <div className="buttonCouple">
                                                    <BootstrapIcon type={67} />
                                                    <div id="dither-add" className="valueButton" onClick={() => {
                                                        setValues((prevState) => ({
                                                            ...prevState,
                                                            dither: true
                                                        }))
                                                    }}><BootstrapIcon type={30} /></div>
                                                    <div id="dither-remove" className="valueButton" onClick={() => {
                                                        setValues((prevState) => ({
                                                            ...prevState,
                                                            dither: false
                                                        }))
                                                    }}><BootstrapIcon type={31} /></div>
                                                </div>
                                                <div className="buttonCouple">
                                                    <BootstrapIcon type={69} text={
                                                        values.ditherAlgo === 1 ? 'j' :
                                                            values.ditherAlgo === 2 ? 'S' :
                                                                values.ditherAlgo === 3 ? 'a' :
                                                                    values.ditherAlgo === 4 ? 'b' :
                                                                        values.ditherAlgo === 5 ? 'si' :
                                                                            values.ditherAlgo === 6 ? 's2' :
                                                                                values.ditherAlgo === 7 ? 'sl' :
                                                                                    'f'} />
                                                    <div id="ditherAlgo-add" className="valueButton" onClick={() => {
                                                        setValues((prevState) => ({
                                                            ...prevState,
                                                            ditherAlgo: prevState.ditherAlgo < 7 ? prevState.ditherAlgo + 1 : 0
                                                        }))
                                                    }}><BootstrapIcon type={70} /></div>
                                                    <div id="ditherAlgo-remove" className="valueButton" onClick={() => {
                                                        setValues((prevState) => ({
                                                            ...prevState,
                                                            ditherAlgo: prevState.ditherAlgo > 0 ? prevState.ditherAlgo - 1 : 7
                                                        }))
                                                    }}><BootstrapIcon type={71} /></div>
                                                </div>
                                            </div>
                                            <div className="buttonCouple">
                                                <div className="buttonCouple">
                                                    <BootstrapIcon type={62} />
                                                    <div id="motionBlurLayers-add" className="valueButton" onClick={() => {
                                                        setValues((prevState) => ({
                                                            ...prevState,
                                                            motionBlurLayers: (prevState.motionBlurLayers < 2) ? (prevState.motionBlurLayers + 1) : 3
                                                        }))
                                                    }}>+</div>
                                                    <div id="motionBlurLayers-remove" className="valueButton" onClick={() => {
                                                        setValues((prevState) => ({
                                                            ...prevState,
                                                            motionBlurLayers: (prevState.motionBlurLayers > 1) ? (prevState.motionBlurLayers - 1) : 0
                                                        }))
                                                    }}>-</div>
                                                </div>
                                                <div className="buttonCouple">
                                                    <BootstrapIcon type={
                                                        (values.motionBlurAngle === 45 || values.motionBlurAngle === 225) ? 64 :
                                                            (values.motionBlurAngle === 90 || values.motionBlurAngle === 270) ? 63 :
                                                                (values.motionBlurAngle === 135 || values.motionBlurAngle === 315) ? 66 :
                                                                    65} />
                                                    <div id="motionBlurAngle-add" className="valueButton" onClick={() => {
                                                        setValues((prevState) => ({
                                                            ...prevState,
                                                            motionBlurAngle: ((prevState.motionBlurAngle % 45) !== 0) ? 0 : (prevState.motionBlurAngle + 45) % 360
                                                        }))
                                                    }}><BootstrapIcon type={70} /></div>
                                                    <div id="motionBlurAngle-remove" className="valueButton" onClick={() => {
                                                        setValues((prevState) => ({
                                                            ...prevState,
                                                            motionBlurAngle: ((prevState.motionBlurAngle % 45) !== 0) ? 0 : (prevState.motionBlurAngle - 45 + (prevState.motionBlurAngle < 45 ? 360 : 0)) % 360
                                                        }))
                                                    }}><BootstrapIcon type={71} /></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={"sliderCoupleContainer" + (activeFilterContainer === 6 ? '' : ' display-none')}>
                                            <div className="sliderCouple">
                                                <div id="vignetteSize-add" onClick={() => {
                                                    setCurrentVignetteSize(values.vignetteSize < 79 ? values.vignetteSize + 1 : 80);
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        vignetteSize: prevState.vignetteSize < 79 ? prevState.vignetteSize + 1 : 80
                                                    }))
                                                }} className="valueButton">
                                                    +
                                                </div>
                                                <div id="vignetteSize-remove" onClick={() => {
                                                    setCurrentVignetteSize(values.vignetteSize > 1 ? values.vignetteSize - 1 : 0);
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        vignetteSize: prevState.vignetteSize > 1 ? prevState.vignetteSize - 1 : 0
                                                    }))
                                                }} className="valueButton">
                                                    -
                                                    </div>
                                                <div className="sliderFlexWrap Aspect">

                                                    <RangeSlider
                                                        value={currentVignetteSize}
                                                        onChange={(e) => { setCurrentVignetteSize(e.target.value) }}
                                                        onAfterChange={
                                                            (e) => {
                                                                setValues((prevState) => ({
                                                                    ...prevState,
                                                                    vignetteSize: parseInt(e.target.value)
                                                                }))
                                                            }
                                                        }
                                                        min={0}
                                                        max={80}
                                                        step={1}
                                                        className="resizeRange"
                                                        variant="light"
                                                        tooltipLabel={currentValue => `${currentValue}%`}
                                                        tooltipPlacement='top'
                                                        tooltip='auto'
                                                    />
                                                </div>

                                                <div className="sliderFlexWrap Aspect">

                                                    <RangeSlider
                                                        value={currentVignetteStrength}
                                                        onChange={(e) => { setCurrentVignetteStrength(e.target.value) }}
                                                        onAfterChange={
                                                            (e) => {
                                                                setValues((prevState) => ({
                                                                    ...prevState,
                                                                    vignetteStrength: parseInt(e.target.value)
                                                                }))
                                                            }
                                                        }
                                                        min={0}
                                                        max={100}
                                                        step={1}
                                                        className="resizeRange"
                                                        variant="light"
                                                        tooltipLabel={currentValue => `${currentValue}%`}
                                                        tooltipPlacement='bottom'
                                                        tooltip='auto'
                                                    />
                                                </div>
                                                <div id="vignetteStrength-add" onClick={() => {
                                                    setCurrentVignetteStrength(values.vignetteStrength < 99 ? values.vignetteStrength + 1 : 100);
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        vignetteStrength: prevState.vignetteStrength < 99 ? prevState.vignetteStrength + 1 : 100
                                                    }))
                                                }} className="valueButton">
                                                    +
                                                </div>
                                                <div id="vignetteStrength-remove" onClick={() => {
                                                    setCurrentVignetteStrength(values.vignetteStrength > 1 ? values.vignetteStrength - 1 : 0);
                                                    setValues((prevState) => ({
                                                        ...prevState,
                                                        vignetteStrength: prevState.vignetteStrength > 1 ? prevState.vignetteStrength - 1 : 0
                                                    }))
                                                }} className="valueButton">
                                                    -
                                                    </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <hr className="round" />
                                <div className={userVerified ? '' : 'display-none'}>
                                    <Form.Group controlId="newPostDescription">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control autoComplete="off" as="textarea" rows={5} onChange={(e) => { setDescription(checkText(e.target.value)); document.getElementById('newPostDescription').value = checkText(e.target.value); }} />
                                    </Form.Group>
                                    <Form.Group className="postButtonHolder">
                                        <button type="submit" onClick={postFile} name="button" className="genericButton">Post</button>
                                    </Form.Group>
                                    <DropdownButton className="changePostView" title={postView}>
                                        <Dropdown.Item onSelect={() => { setPostView('Public') }}>Public</Dropdown.Item>
                                        <Dropdown.Item onSelect={() => { setPostView('Friends') }} >Friends</Dropdown.Item>
                                        <Dropdown.Item onSelect={() => { setPostView('Private') }} >Private</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </Form>
                            <hr className="round" />
                        </div>




                        <div className="blog-post">
                            <h5 className="w">Link Vizije</h5>
                            <p className="blog-post-meta">Zadnje ažurirano 8. studenog 2020. <strong> <a className="alink" href="https://docs.google.com/document/d/141DHijMdyPfeffnDDo_hYwJRKfGQT5NC6UDfMsEDl3Y/edit?usp=sharing" target="_blank" rel="noreferrer">Vizija</a> </strong></p>
                        </div>



                    </div>
                </div>
            </div>
        </div >
    );
}

export default Editor;